import { ContentLayout } from "@/components/main/content-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <ContentLayout title="404" subtitle="Oops! Page not found" buttons={false} fontSize="text-8xl">
            <div className="pb-20"/>
        </ContentLayout>
    )
}