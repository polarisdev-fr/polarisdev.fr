import { ContentLayout } from "@/components/main/content-layout";
import { Card } from "@/components/ui/card";
import { COMPANY_FULL_NAME } from "@/lib/constants";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <ContentLayout title={`${COMPANY_FULL_NAME} - Terms of Service`} subtitle="Your guide to our legal policies" buttons={false} fontSize="text-3xl lg:text-4xl">
      <Card className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 -translate-y-[10rem]">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the services provided by {COMPANY_FULL_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including our website, mobile applications, and any other software or services offered by us in connection to any of the foregoing (the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you don't agree to these Terms, do not use the Services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will always post the most current version on our website. If we make material changes, we will notify you through the Services or by other means to provide you the opportunity to review the changes before they become effective. Your continued use of our Services after we publish or send a notice about our changes to these Terms means that you are consenting to the updated Terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Privacy Policy</h2>
          <p className="mb-4">
            Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
          <p className="mb-4">
            To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
          <p className="mb-4">
            Our Services may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post to the Services, including its legality, reliability, and appropriateness. By posting User Content on or through the Services, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
          <p className="mb-4">
            You agree not to use the Services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate {COMPANY_FULL_NAME}, a {COMPANY_FULL_NAME} employee, another user, or any other person or entity.</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="mb-4">
            The Services and their original content (excluding User Content), features, and functionality are and will remain the exclusive property of {COMPANY_FULL_NAME} and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {COMPANY_FULL_NAME}.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the Services. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall {COMPANY_FULL_NAME}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Disclaimer</h2>
          <p className="mb-4">
            Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. The Services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Changes to Service</h2>
          <p className="mb-4">
            We reserve the right to withdraw or amend our Services, and any service or material we provide via the Services, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Services is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Services, or the entire Services, to users, including registered users.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="font-semibold">{COMPANY_FULL_NAME}</p>
          <p className="mb-2">Email: contact@polarisdev.fr</p>
          <p>
            <Link href="/legal/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </section>
        
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </Card>
    </ContentLayout>
  );
}