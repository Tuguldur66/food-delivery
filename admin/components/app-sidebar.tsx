import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <Link href="/dashboard/foods">foods</Link>
        <Link href="/dashboard/orders">orders</Link>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
