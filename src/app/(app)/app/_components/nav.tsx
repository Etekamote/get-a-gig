import { faBars, faMessage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./nav-links";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Nav() {
  return (
    <nav className="flex items-center gap-8 ">
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <ul className="flex gap-8">
        <li className="bg-white/20 w-8 h-8 rounded-full flex justify-center items-center relative cursor-pointer">
          <FontAwesomeIcon icon={faMessage} className="w-1/2" />
          <div className="w-3 h-3 rounded-full bg-red-500 absolute -top-1 right-0 text-[8px] flex justify-center items-center ">
            1
          </div>
        </li>
        <li className="w-8 lg:w-32 h-8 bg-white/20 rounded-full text-sm flex items-center justify-center gap-2 font-semibold cursor-pointer">
          <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />{" "}
          <span className="hidden lg:block">Add offer</span>
        </li>
        <Sheet>
          <SheetTrigger>
            <FontAwesomeIcon icon={faBars} className=" w-4 h-4 lg:hidden" />
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-tr from-indigo-800 to-black border-none">
            <NavLinks />
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
}
