"use client"
import { useState } from 'react'
import { ContentLayout } from "@/components/main/content-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Mock data for products and categories
const categories = ["All", "Servers", "Games", "Softwares", "Web"]
const products = Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  price: Math.floor(Math.random() * 200) + 99,
  image: `/placeholder.svg`
}))

export default function ProductsPage() {
  const [currentCategory, setCurrentCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  const filteredProducts = currentCategory === "All" 
    ? products 
    : products.filter(product => product.category === currentCategory)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <ContentLayout
      title="Our Products"
      subtitle="Explore our wide range of high-quality audio equipment"
      buttons={false}
    >
      <div className="container mx-auto px-4 py-8 -translate-y-[10rem] bg-secondary rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <Select value={currentCategory} onValueChange={setCurrentCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span>Page {currentPage} of {pageCount}</span>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
              disabled={currentPage === pageCount}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map(product => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <Badge className="mt-2">{product.category}</Badge>
                <p className="text-2xl font-bold mt-2">${product.price}</p>
              </CardContent>
              <CardFooter className='flex flex-row space-x-2'>
                <Button className="w-1/2" variant={"secondary"}>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
                <Button className="w-1/2">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No products found in this category.</p>
        )}
      </div>
    </ContentLayout>
  )
}