import { ContentLayout } from "@/components/main/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_FULL_NAME } from "@/lib/constants";
import Link from "next/link";

const LegalSection = ({ title, description, href }: { title: string; description: string; href: string }) => (
  <Card className="mb-6">
    <CardContent>
        <Link href={href} className="text-primary">
            <div className="flex flex-col items-start gap-2 pt-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </Link>
    </CardContent>
  </Card>
);

export default function LegalHub() {
  const legalSections = [
    {
      title: "Data Privacy Policy",
      description: "Learn how we collect, use, and protect your personal information.",
      href: "/legal/privacy",
    },
    {
      title: "Cookie Policy",
      description: "Understand how we use cookies and similar technologies on our website.",
      href: "/legal/cookie",
    },
    {
      title: "Terms of Service",
      description: "Read the terms governing your use of our services and website.",
      href: "/legal/terms-of-service",
    },
    {
      title: "DMCA Policy",
      description: "Understand our policy on copyright infringement and how to report violations.",
      href: "/legal/dmca",
    },
    {
      title: "Acceptable Use Policy",
      description: "Learn about the acceptable and prohibited uses of our services.",
      href: "/legal/acceptable-use",
    },
    {
      title: "Refund Policy",
      description: "Understand our policies regarding refunds and cancellations.",
      href: "/legal/refund",
    },
  ];

  return (
    <ContentLayout title={`${COMPANY_FULL_NAME} - Legal Information`} subtitle="Your guide to our legal policies" buttons={false}>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 -translate-y-[10rem]">
        <h1 className="text-4xl font-bold mb-8 text-center">Legal Information</h1>
        
        <p className="text-lg mb-8 text-center text-muted-foreground">
          Welcome to the legal hub of {COMPANY_FULL_NAME}. Here you can find links to all our policies and legal documents.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {legalSections.map((section, index) => (
            <LegalSection key={index} {...section} />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="mb-4">
            If you have any questions about our legal policies or need further clarification, please don&apos;t hesitate to contact us.
          </p>
          <p className="font-semibold">
            Email: contact@polarisdev.fr
          </p>
        </div>
      </div>
    </ContentLayout>
  );
}