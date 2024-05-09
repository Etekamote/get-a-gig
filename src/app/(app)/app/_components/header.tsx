import Logo from "@/components/logo";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="bg-gradient-to-tr from-indigo-800 to-black absolute w-full min-h-12 flex items-center justify-between px-8 py-4 ">
      <Logo variant="small" />
      <Nav />
    </header>
  );
}
