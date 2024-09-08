import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Section } from "../section";
  
  const FAQS: { question: string; answer: string }[] = [
    {
        question: "What is Polaris?",
        answer: "Polaris is a platform that helps you build and deploy your own applications with ease. It provides you with a set of tools and services that you can use to create your own projects."
    },
    {
        question: "How can I get started with Polaris?",
        answer: "To get started with Polaris, you can sign up for an account on our website. Once you have created an account, you can start building your projects using our tools and services."
    },
    {
        question: "What kind of projects can I build with Polaris?",
        answer: "You can build a wide range of projects with Polaris, including web applications, mobile applications, and APIs. Our platform provides you with the tools and services you need to create any kind of project you can imagine."
    },
    {
        question: "Is Polaris free to use?",
        answer: "Yes, Polaris is free to use. You can sign up for an account on our website and start building your projects without any cost. We also offer premium plans with additional features and services for users who need them."
    },
    {
        question: "Can I use Polaris for commercial projects?",
        answer: "Yes, you can use Polaris for commercial projects. Our platform is designed to help you build and deploy your own applications, whether they are personal projects or commercial products. We offer premium plans with additional features and services for users who need them."
    },
    {
        question: "How can I get support for my projects?",
        answer: "If you need help with your projects, you can reach out to our support team for assistance. We offer a range of support options, including email support, discord, and community forums. Our team is here to help you with any questions or issues you may have."
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time. If you decide to cancel your subscription, you will still have access to your account and projects until the end of your billing cycle. You can also reactivate your subscription at any time if you change your mind."
    },
    {
        question: "How can I upgrade my plan?",
        answer: "If you want to upgrade your plan, you can do so from your account settings. You can choose from a range of premium plans with additional features and services to suit your needs. Once you have upgraded your plan, you will have access to the new features and services right away."
    },
  ];
  
  export const FAQSection = () => {
    return (
      <Section className="w-full flex flex-col max-lg:grid max-lg:grid-cols-1 max-lg:gap-6 lg:flex-row lg:items-start lg:gap-4">
        <div className="flex-1 max-lg:text-center">
          <h2 className="text-xl font-bold text-primary">FAQ</h2>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="w-full max-w-lg flex-1 text-left">
          <Accordion type="multiple">
            {FAQS.map((faq, index) => (
              <AccordionItem
                value={faq.question}
                key={faq.question}
                className="text-left"
              >
                <AccordionTrigger>
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

    );
  };