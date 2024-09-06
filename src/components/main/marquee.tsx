/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ap5vLEqqUVw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

export default function MarqueeBranding() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto relative lg:pt-16 z-1 pb-16">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
            <h2 className="font-title font-bold text-2xl lg:text-4xl text-center">They trust us</h2>
            <p className="font-light text-lg lg:text-xl font-regular text-center pt-2">
                Trusted by top companies to deliver cutting-edge solutions.
            </p>
        </div>
        <div className="mt-12 overflow-x-auto items-center justify-center flex gap-8">
          <div className="flex items-center gap-8 py-4">
            {brands.map((brand, index) => (
                <TooltipProvider key={index}>
                    <Tooltip delayDuration={200}>
                        <TooltipTrigger>
                            <Link href={brand.href} className="flex h-12 w-32 items-center justify-center" prefetch={false}>
                                <Image
                                    src={brand.image}
                                    width="140"
                                    height="70"
                                    alt={brand.tooltip}
                                    className="aspect-[2/1] object-contain object-center"
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            {brand.tooltip}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const brands = [
    {
        tooltip: "SkyGames",
        href: "https://skygames.fr",
        image: "/assets/skygames.png",
    },
    {
        tooltip: "EveryDance",
        href: "https://everydance.fr",
        image: "/assets/everydance.png",
    },
]