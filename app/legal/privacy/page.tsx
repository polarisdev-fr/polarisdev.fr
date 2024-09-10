import { ContentLayout } from "@/components/main/content-layout";
import { Card } from "@/components/ui/card";
import { COMPANY_FULL_NAME } from "@/lib/constants";

export default function DataPrivacy() {
  return (
    <ContentLayout title={`${COMPANY_FULL_NAME} - Data Privacy Policy`} subtitle="Your privacy is important to us" buttons={false} fontSize="text-3xl lg:text-4xl">
      <Card className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 -translate-y-[10rem]">
        <h1 className="text-3xl font-bold mb-6">Data Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            At {COMPANY_FULL_NAME}, we are committed to protecting your privacy and ensuring the security of your personal information. This Data Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services or visit our website.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you create an account, use our services, or contact our support team. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Communication history with us</li>
          </ul>
          <p>
            We also automatically collect certain information when you use our services, including device information, IP address, and usage data.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use of Data</h2>
          <p className="mb-4">
            We use the collected data for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing and improving our services</li>
            <li>Communicating with you about your account and our services</li>
            <li>Personalizing your experience</li>
            <li>Analyzing usage patterns to enhance our offerings</li>
            <li>Ensuring the security and integrity of our platform</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your data with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who assist us in operating our business</li>
            <li>Law enforcement or other authorities when required by law</li>
            <li>Other parties with your consent or at your direction</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal information</li>
            <li>The right to rectify inaccurate data</li>
            <li>The right to erasure of your data</li>
            <li>The right to restrict processing of your data</li>
            <li>The right to data portability</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Data Privacy Policy or our practices regarding your personal information, please contact us at:
          </p>
          <p className="font-semibold">{COMPANY_FULL_NAME}</p>
          <p>Email: contact@polarisdev.fr</p>
        </section>
        
        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </Card>
    </ContentLayout>
  );
}