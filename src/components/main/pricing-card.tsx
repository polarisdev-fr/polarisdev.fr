import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"
import { BuyButton } from "./buy-button"

type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  oneTimePrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
}

export const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Yearly
      </TabsTrigger>
    </TabsList>
  </Tabs>
)

export const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, oneTimePrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
  <Card
    className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
      "animate-background-shine dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[linear-gradient(110deg,#f2f2f2,45%,#fff,55%,#f2f2f2)] bg-[length:200%_100%] transition-colors text-white":
        exclusive,
    })}>
    <div>
      <CardHeader className="pb-8 pt-4">
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
            <div
              className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-800 dark:text-white text-white", {
                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black": popular,
              })}>
              Save {monthlyPrice * 12 - yearlyPrice}<span className="font-mono">€</span>
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
        )}
        <div className="flex gap-0.5">
          {oneTimePrice ? (
            <h3 className="text-3xl font-bold">{oneTimePrice}<span className="font-mono">€</span></h3>
          ) : yearlyPrice && isYearly ? (
            <h3 className="text-3xl font-bold">{yearlyPrice}<span className="font-mono">€</span></h3>
          ) : (
            <h3 className="text-3xl font-bold text-black dark:text-white">{monthlyPrice ? "€" + monthlyPrice : "Custom"}</h3>
          )}
          <span className="flex flex-col justify-end text-sm mb-1">
            {oneTimePrice ? "One-time" : yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}
          </span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <BuyButton text={actionLabel} priceId="'price_1PtJaRRucEaeKigNpeBzNTH8'" />
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)   