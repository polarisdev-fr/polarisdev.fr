'use client'

import { ContentLayout } from '@/components/dashboard/content-layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart'

const monthlySalesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
]

const productData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
]

const customerGrowthData = [
  { name: 'Jan', customers: 100 },
  { name: 'Feb', customers: 120 },
  { name: 'Mar', customers: 150 },
  { name: 'Apr', customers: 180 },
  { name: 'May', customers: 220 },
  { name: 'Jun', customers: 280 },
]

const COLORS = ['var(--color-product-a)', 'var(--color-product-b)', 'var(--color-product-c)', 'var(--color-product-d)']

export default function UserStats() {
  return (
    <ContentLayout title="Customer Statistics">
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
            <BreadcrumbPage>Customer Statistics</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-7xl mx-auto space-y-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="h-[300px]"
                config={{
                  sales: {
                    label: "Sales",
                    color: "hsl(var(--primary))",
                  },
                }}
              >
                <BarChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="sales" fill="var(--color-sales)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="h-[300px]"
                config={{
                  'Product A': { color: COLORS[0] },
                  'Product B': { color: COLORS[1] },
                  'Product C': { color: COLORS[2] },
                  'Product D': { color: COLORS[3] },
                }}
              >
                <PieChart>
                  <Pie
                    data={productData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-[300px]"
              config={{
                customers: {
                  label: "Customers",
                  color: "hsl(var(--primary))",
                },
              }}
            >
              <LineChart data={customerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="customers" stroke="var(--color-customers)" />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  )
}