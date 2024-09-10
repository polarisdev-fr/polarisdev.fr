import { Navbar } from "@/components/main/menu";
import { HeroHeader } from "./hero-header";
import Footer from "./footer";

interface ContentLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  buttons?: boolean;
  fontSize?: string;
}

export function ContentLayout({ children, title, subtitle, buttons, fontSize }: ContentLayoutProps) {
  return (
    <div className="p-4 lg:p-6">
      <Navbar/>
      <section className="px-8 pb-12 lg:pb-52 w-full h-screen rounded-[45px] relative z-1 overflow-hidden mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gray-300 dark:bg-[#111111] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"/>
        <HeroHeader title={title} subtitle={subtitle} buttons={buttons == undefined ? true : buttons} size={fontSize}/>
      </section>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  );
}