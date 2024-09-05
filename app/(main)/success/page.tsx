import { ContentLayout } from "@/components/main/content-layout";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { CircleCheckIcon } from "lucide-react";
import Link from "next/link"

export default function SuccessPage() {
    return (
        <ContentLayout title="Welcome to Polaris!" subtitle="Your payment has been processed." buttons={false}>
            <div className="flex flex-col items-center justify-center w-full h-full space-y-4 -translate-y-[10rem]">
                <Card className="w-full max-w-md mx-auto border-[1px] border-primary/10 shadow-lg">
                    <CardHeader>
                        <CardTitle>Payment Successful</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                        <CircleCheckIcon className="text-green-500 size-12" />
                        <p className="text-lg font-medium">Thank you for your purchase!</p>
                        <p className="text-muted-foreground">Your payment was processed successfully. We appreciate your business.</p>
                    </CardContent>
                    <CardFooter className="flex justify-center space-x-4">
                        <Link
                        href="/"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        >
                            Back to Home
                        </Link>
                        <Link
                        href="/dashboard"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        >
                            Dashboard
                        </Link>
                    </CardFooter>
                    </Card>
            </div>
        </ContentLayout>
    )
}