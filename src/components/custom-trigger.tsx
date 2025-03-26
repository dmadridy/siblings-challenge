import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon, PanelLeftClose } from "lucide-react";
import { cn } from "@/lib/utils";
export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={cn("text-violet-800", open ? "px-1" : "")}
    >
      {open ? (
        <PanelLeftClose className="transition-transform duration-200" />
      ) : (
        <MenuIcon className="transition-transform duration-200" />
      )}
    </button>
  );
}
