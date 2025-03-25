import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <button className="w-fit" onClick={toggleSidebar}>
      <MenuIcon className={open ? "text-violet-500 duration-200" : ""} />
    </button>
  );
}
