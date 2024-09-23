"use client"

import { ContentLayout } from "@/components/main/content-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Laptop, Smartphone, Globe, Zap, HeadphonesIcon } from "lucide-react"
import React from "react"
import Link from "next/link"

const services = [
  {
    disabled: true,
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    icon: <Globe className="h-8 w-8 mb-2" />,
  },
  {
    disabled: true,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: <Smartphone className="h-8 w-8 mb-2" />,
  },
  {
    disabled: true,
    title: "Software Development",
    description: "Bespoke software solutions to streamline your operations.",
    icon: <Laptop className="h-8 w-8 mb-2" />,
  },
  {
    disabled: true,
    title: "API Integration",
    description: "Seamless integration of third-party APIs and services.",
    icon: <Code className="h-8 w-8 mb-2" />,
  },
  {
    disabled: true,
    title: "Performance Optimization",
    description: "Boost the speed and efficiency of your existing applications.",
    icon: <Zap className="h-8 w-8 mb-2" />,
  },
  {
    disabled: true,
    title: "Technical Support",
    description: "Ongoing maintenance and support for your digital products.",
    icon: <HeadphonesIcon className="h-8 w-8 mb-2" />,
  },
]

export default function ServicesPage() {
  return (
    <ContentLayout
      title="Services"
      subtitle="Discover our comprehensive range of development services"
      buttons={false}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 -translate-y-[10rem]">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-center">{service.icon}</div>
              <CardTitle className="text-center">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">{service.description}</CardDescription>
            </CardContent>
            <div className="p-6 pt-0 flex justify-center">
              <Button variant="outline" disabled>Learn More</Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="mb-6">We specialize in tailoring our services to meet your unique requirements.</p>
        <Button size="lg"><Link href={"/contact"}>Contact Us</Link></Button>
      </div>
    </ContentLayout>
  )
}