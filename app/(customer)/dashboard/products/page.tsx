"use client"; // Ensures that the component runs on the client side

import { ContentLayout } from "@/components/dashboard/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { redirect } from "next/navigation";

// Mock function for Stripe API calls (replace with actual Stripe API integration)
const stripeApi = {
  getProducts: async () => [
    { id: "1", name: "Product 1", price: 9.99, description: "Description 1" },
    { id: "2", name: "Product 2", price: 19.99, description: "Description 2" },
  ],
  createProduct: async (product: any) => ({ id: Date.now().toString(), ...product }),
  updateProduct: async (product: any) => product,
  deleteProduct: async (id: any) => {},
};

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [isSubscription, setIsSubscription] = useState(currentProduct?.isSubscription || false)

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch('/api/products')
        .then((res) => res.json())
        .then((productsData) => setProducts(productsData));
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData.entries());

    if (currentProduct) {
      const updatedProduct = await stripeApi.updateProduct({ ...currentProduct, ...productData });
      setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    } else {
      const newProduct = await stripeApi.createProduct(productData);
      console.log(newProduct);
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
      }).then(() => {
        toast("Product created successfully", {
          description: `Product ${newProduct.name} has been created successfully`,
          action: {
            label: "View",
            onClick: () => redirect(`/products/${newProduct.id}`),
          }
        });
      })
      setProducts([...products, newProduct]);
    }

    setIsDialogOpen(false);
    setCurrentProduct(null);
  };

  const handleEdit = (product: any) => {
    setCurrentProduct(product);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: any) => {
    await fetch(`/api/products?id=${id}`, {
      method: 'DELETE',
    }).catch((e) => {
      console.error(e);
      toast.error("An error occurred while deleting the product");
    }).then(() => {
      setProducts(products.filter((product) => product.id !== id));
      toast.success("Product deleted successfully");
    })
  };

  return (
    <ContentLayout title="Manage Products">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Manage Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-6xl mx-auto space-y-8 pt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Products</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setCurrentProduct(null)}>
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{currentProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue={currentProduct?.name} required />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isSubscription"
                    name="isSubscription"
                    checked={isSubscription}
                    onCheckedChange={setIsSubscription}
                  />
                  <Label htmlFor="isSubscription">Subscription Product</Label>
                </div>
                <div>
                  <Label htmlFor="price">
                    {isSubscription ? "Recurring Price" : "Price"}
                  </Label>
                  <Input 
                    id="price" 
                    name="price" 
                    type="number" 
                    step="0.01" 
                    defaultValue={currentProduct?.price} 
                    required 
                  />
                </div>
                {isSubscription && (
                  <div>
                    <Label htmlFor="interval">Billing Interval</Label>
                    <Select name="interval" defaultValue={currentProduct?.interval || 'month'}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select billing interval" />
                      </SelectTrigger>
                      <SelectContent id="interval">
                        <SelectItem value="day">Daily</SelectItem>
                        <SelectItem value="week">Weekly</SelectItem>
                        <SelectItem value="month">Monthly</SelectItem>
                        <SelectItem value="year">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" name="description" defaultValue={currentProduct?.description} />
                </div>
                <Button type="submit">
                  {currentProduct ? "Update" : "Create"} {isSubscription ? "Subscription" : "Product"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {product.price ? `$${parseFloat(product.price).toFixed(2)}` : "N/A"}
                </TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(product)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(product.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ContentLayout>
  );
}
