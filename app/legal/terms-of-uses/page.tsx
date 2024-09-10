import { ContentLayout } from "@/components/main/content-layout";
import { Card } from "@/components/ui/card";
import { COMPANY_FULL_NAME } from "@/lib/constants";

export default function TermsOfUse() {
  return (
    <ContentLayout title={`${COMPANY_FULL_NAME} - Terms of Use`} subtitle="Your agreement with us" buttons={false} fontSize="text-3xl lg:text-4xl">
      <Card className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 -translate-y-[10rem]">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the services provided by {COMPANY_FULL_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms of Use.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms of Use. You are prohibited from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violating any applicable laws or regulations</li>
            <li>Infringing on the intellectual property rights of others</li>
            <li>Transmitting any harmful or malicious code</li>
            <li>Attempting to gain unauthorized access to our systems or user accounts</li>
            <li>Engaging in any activity that interferes with or disrupts our services</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
          <p className="mb-4">
            To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            All content and materials available through our services, including but not limited to text, graphics, logos, images, and software, are the property of {COMPANY_FULL_NAME} or its licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, {COMPANY_FULL_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Use.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These Terms of Use shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Use, please contact us at:
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