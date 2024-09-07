import { ContentLayout } from "@/components/main/content-layout";
import { FeaturesSection } from "@/components/main/features";
import MarqueeBranding from "@/components/main/marquee";
import { PreviewMockup } from "@/components/main/preview-mockup";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/features/landing/cta/ctaAction";
import { FAQSection } from "@/features/landing/faq/faqSection";
import { PricingSection } from "@/features/landing/pricing/pricing";
import { COMPANY_FULL_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <ContentLayout title={COMPANY_FULL_NAME} subtitle="Make your dreams reality">
      <PreviewMockup url="/assets/preview.png" alt="Preview"/>
      <MarqueeBranding/>
      <section id="features" className="max-w-7xl mx-auto relative lg:pt-16 z-1 pb-16">
        <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
          <div>
            <Badge variant="outline" className="">
              <p className="font-sans uppercase text-xs font-semibold px-4 py-1.5 inline-block rounded-full z-1 text-body relative">
                Discover
              </p>
            </Badge>
          </div>
          <h2 className="font-title font-bold text-2xl lg:text-4xl text-center">
            Features, <span className="italic font-italic font-extralight">features</span><br/>and Features.
          </h2>
          <p className="font-light text-lg lg:text-xl font-regular text-center pt-2">
            Use our different services to ship your project as fast as possible.
          </p>
        </div>
        <FeaturesSection/>
        <PricingSection/>
        <FAQSection/>
        <CTASection/>
      </section>
    </ContentLayout>
  );
}
