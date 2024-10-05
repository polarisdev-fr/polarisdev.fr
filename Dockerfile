# Base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Install Prisma CLI separately
RUN yarn add prisma

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Run Prisma migrations and generate the Prisma client
ENV DATABASE_URL="your-production-database-url" # Make sure to set this to the correct DB URL in production
RUN npx prisma migrate deploy     # Apply database migrations
RUN npx prisma generate            # Generate Prisma client

# Build the Next.js project
RUN yarn build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Add a new user for security purposes
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set permissions for Next.js build cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the built application and static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose the application port
EXPOSE 3000

# Set the port and hostname
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]
