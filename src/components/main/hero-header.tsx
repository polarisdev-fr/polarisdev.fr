import Link from "next/link";
import { Button } from "../ui/button";

export function HeroHeader({ title, subtitle, buttons }: { title: string; subtitle: string, buttons?: boolean }) {
    return (
        <div className="relative z-[20] w-full max-w-3xl mx-auto grid grid-cols-1 gap-6 lg:gap-! py-24 h-full lg:py-52">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl lg:text-7xl font-bold text-left lg:text-center">{title}</h1>
            <p className="font-light text-primary/80 text-lg lg:text-2xl text-left lg: max-lg:max-w-sm">{subtitle}</p>
            {buttons ? (
              <div className="flex space-x-4 mt-8">
              <Button variant="default" className="duration-300 hover:scale-105 transform transition shadow-lg"><Link href="#">Get Services</Link></Button>
              <Button variant="outline" className="duration-300 hover:scale-105 transform transition shadow-lg"><Link href="#">Products</Link></Button>
              </div>
            ) : (null)}
          </div>
        </div>
    );
}