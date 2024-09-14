"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {ContentLayout} from "@/components/main/content-layout"
import { useEffect, useState } from "react"

export default function ProductPage({params}: {params: {id: string}}) {
  const [product, setProduct] = useState<any | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products?id=${params.id}`)
      const data = await response.json()
      setProduct(data)
    }
    fetchProduct()
  })

  return (
    <ContentLayout
      title="Premium Wireless Headphones"
      subtitle="Experience crystal-clear sound with our latest technology"
      buttons={false}
    >
      <div className="container mx-auto px-4 py-8 -translate-y-[10rem]">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Premium Wireless Headphones</CardTitle>
            <CardDescription>High-quality audio for music enthusiasts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Wireless Headphones"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold">$299.99</span>
                <Badge variant="secondary">In Stock</Badge>
              </div>
              <p className="text-muted-foreground">
                Immerse yourself in your favorite music with our Premium Wireless Headphones. 
                Featuring advanced noise cancellation technology and long-lasting battery life, 
                these headphones are perfect for long listening sessions at home or on the go.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>40-hour battery life</li>
                  <li>Active noise cancellation</li>
                  <li>Bluetooth 5.0 connectivity</li>
                  <li>Comfortable over-ear design</li>
                  <li>Built-in voice assistant support</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>
    </ContentLayout>
  )
}