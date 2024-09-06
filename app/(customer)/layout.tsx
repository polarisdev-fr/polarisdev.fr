import { requiredCurrentUser } from "@/auth/current-user";
import AdminPanelLayout from "@/components/dashboard/dashboard-layout";
import { redirect } from "next/navigation";

export default async function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  await requiredCurrentUser();

  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}