import AuthLayout from "@/features/auth/auth-layout";

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}