/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ap5vLEqqUVw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"

export default function MarqueeBranding() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto relative lg:pt-16 z-1 pb-16">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by the Best</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform is used by the world's leading companies to build and scale their web applications.
          </p>
        </div>
        <div className="mt-12 overflow-x-auto items-center justify-center flex gap-8">
          <div className="flex items-center gap-8 py-4">
            <Link href="https://skygames.fr" className="flex h-12 w-32 items-center justify-center" prefetch={false}>
                <img
                    src="/assets/skygames.png"
                    width="140"
                    height="70"
                    alt="Brand Logo"
                    className="aspect-[2/1] object-contain object-center"
                />
            </Link>
            <Link href="https://everydance.fr" className="flex h-12 w-32 items-center justify-center" prefetch={false}>
                <img
                    src="/assets/everydance.png"
                    width="140"
                    height="70"
                    alt="Brand Logo"
                    className="aspect-[2/1] object-contain object-center"
                />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}