import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Section } from "../section";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  return (
    <Section>
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent>
            <div className="flex flex-col items-center gap-4 lg:gap-6 w-full mt-10 mb-10">
                <h2 className="font-title font-bold text-2xl lg:text-4xl text-center">
                    Ready to get started?
                </h2>
                <p className="font-light text-lg lg:text-xl font-regular text-center pt-2">
                    Start building your project today with our tools and services.
                </p>
                <Link
                    href="#pricing"
                    className={cn(
                    buttonVariants({
                        size: "lg",
                        variant: "secondary",
                    }),
                    "w-1/2"
                    )}
                >
                    Get Started
                </Link>
            </div>
            </CardContent>
        </Card>
    </Section>
  );
};