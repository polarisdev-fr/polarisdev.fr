"use client"
import { useEffect, useState } from 'react';
import { ContentLayout } from "@/components/main/content-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Loading from '@/components/main/loading';

const categories = ["All", "Servers", "Games", "Softwares", "Web"];

export default function ProductsPage() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageCount = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/stripe-products');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

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
          {currentProducts.map(({ product, price }: { product: any, price: any }) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <Badge className="mt-2">{product.active ? 'Available' : 'Unavailable'}</Badge>
                <p className="text-2xl font-bold mt-2">
                  {price ? `$${(price.unit_amount! / 100).toFixed(2)}` : 'Price not available'}
                </p>
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
      </div>
    </ContentLayout>
  );
}
