import { Outlet } from "react-router";
import { Header } from "./layouts";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";

export default function Root() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
