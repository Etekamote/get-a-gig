import { cn } from "@/lib/utils";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

type LogoProps = {
  variant?: "small" | "default";
};

export default function Logo({ variant }: LogoProps) {
  return (
    <div
      className={cn("flex items-center gap-x-4 text-white", {
        "gap-x-1": variant === "small",
      })}
    >
      <div
        className={cn(
          "bg-indigo-500  rounded-full  p-3 text-4xl lg:p-4 ",
          kanit.className,
          {
            "p-1 text-xs lg:p-1": variant === "small",
          }
        )}
      >
        GG
      </div>
      <h1
        className={cn("text-5xl lg:text-6xl", kanit.className, {
          "text-lg lg:text-lg": variant === "small",
        })}
      >
        GetAGig.com
      </h1>
    </div>
  );
}
