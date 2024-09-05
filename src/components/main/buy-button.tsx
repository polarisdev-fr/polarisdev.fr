"use client"
import { BuyAction } from "@/lib/actions/buy-action";
import { Button } from "../ui/button";

export const BuyButton = ({ text }: { text: string }) => {

  const data: any = {
    priceId: 'price_1PtJaRRucEaeKigNpeBzNTH8',
    isSubscription: 'true',
  }

  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }

  return (
    <form className="relative inline-flex w-full items-center justify-center">
      <Button 
        className="w-full" 
        formAction={() => BuyAction(formData)}
      >
        {text}
      </Button>
    </form>
  )
}