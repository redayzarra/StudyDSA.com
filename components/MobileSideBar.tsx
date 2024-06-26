import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { CgMenuLeftAlt } from "react-icons/cg";
import SideBar from "./SideBar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 transition-all">
        <CgMenuLeftAlt size={24} />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0 shadow-lg bg-black">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
