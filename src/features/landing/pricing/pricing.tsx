import { currentUser } from "@/auth/current-user";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Section } from "../section";

export const PricingSection = async () => {
  const user = await currentUser();

  return (
    <Section id="pricing">
      <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12 pb-8">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Pricing Plans
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Find the perfect plan for your development needs
        </p>
      </div>
      <div className="flex justify-center gap-4 max-lg:flex-col">
        <PricingCard
          title="Starter"
          price={20}
          description="Get started with essential development tools and support."
          items={[
            "Basic API Integration",
            "UI/UX Design Consultation",
            "Community Support",
          ]}
        >
          <Link
            href="/api/auth/signin"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
              "w-full"
            )}
          >
            Sign Up
          </Link>
        </PricingCard>
        <PricingCard
          title="Enterprise"
          price={99}
          description="Comprehensive solutions tailored to your enterprise needs."
          items={[
            "Dedicated Development Team",
            "Custom Integrations",
            "24/7 Support",
            "Full Stack Development",
          ]}
        >
          {user ? (
            <form className="w-full">
              <Button
                formAction={async () => {
                  "use server";
                  //await upgradeToEnterprise("");
                }}
                size="lg"
                variant="default"
                className="w-full"
              >
                Grab it
              </Button>
            </form>
          ) : (
            <Link
              href="/api/auth/signin"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "w-full"
              )}
            >
              Sign Up
            </Link>
          )}
        </PricingCard>
        <PricingCard
          title="Professional"
          price={39}
          description="Advanced solutions for growing businesses."
          items={[
            "Custom Software Development",
            "Full API Integration",
            "Priority Support",
          ]}
        >
          {user ? (
            <form className="w-full">
              <Button
                formAction={async () => {
                  "use server";
                  //await upgradeToPremium("");
                }}
                size="lg"
                variant="default"
                className="w-full"
              >
                Grab it
              </Button>
            </form>
          ) : (
            <Link
              href="/api/auth/signin"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "w-full"
              )}
            >
              Sign Up
            </Link>
          )}
        </PricingCard>
      </div>
    </Section>
  );
};

type PricingCardProps = PropsWithChildren<{
  title: string;
  description: string;
  items: string[];
  price: number;
}>;

const PricingCard = (props: PricingCardProps) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      className="h-fit"
    >
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">${props.price}</span>
        <span className="text-muted-foreground">/month</span>
      </CardContent>

      <CardContent>
        <ul role="list" className="mb-8 space-y-4 text-left">
          {props.items.map((item) => (
            <PricingItem key={item}>{item}</PricingItem>
          ))}
        </ul>
      </CardContent>
      <CardFooter>{props.children}</CardFooter>
    </Card>
  );
};

const PricingItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="flex items-center space-x-3">
      <Check size={16} className="text-green-500" />
      <span>{children}</span>
    </li>
  );
};