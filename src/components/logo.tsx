import { cn } from "@/lib/utils";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div
      className={cn(
        "bg-indigo-500 p-2 rounded-full text-xl lg:p-4 lg:text-3xl",
        kanit.className
      )}
    >
      GG
    </div>
  );
}
