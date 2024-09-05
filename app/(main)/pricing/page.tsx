// price_1PtJaRRucEaeKigNpeBzNTH8
"use client"
import { ContentLayout } from "@/components/main/content-layout";
import { PricingCard, PricingSwitch } from "@/components/main/pricing-card";
import { plans } from "@/lib/constants";
import React from "react";

export default function PricingPage() {
    const [isYearly, setIsYearly] = React.useState(false)
    const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

    return (
        <ContentLayout title="Our Pricing Plans" subtitle="Find the perfect plan for your development needs" buttons={false}>
            <div className="px-2 h-full mt-4">
                <div className="z-30 relative transition-all duration-200 h-full -translate-y-[20rem]">
                    <div className="flex justify-center -translate-x-8">
                        <PricingSwitch onSwitch={togglePricingPeriod} />
                    </div>
                    <div className="flex justify-center space-x-4 mt-8">
                        <div className="py-8">
                            <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                                {plans.map((plan) => (
                                    <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}