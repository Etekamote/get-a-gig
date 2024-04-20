import { Button } from "@/components/ui/button";
import { Kanit } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col justify-center items-center px-8  gap-y-12 lg:px-96">
      <div className="flex items-center gap-x-4">
        <Logo />
        <h1 className={cn("text-5xl", kanit.className)}>GetAGig.com</h1>
      </div>
      <p className={cn("text-slate-400 text-sm text-center", kanit.className)}>
        &quot;Get a Gig&quot; is your ultimate freelancing hub, where you can
        both find the perfect talent for your projects and discover exciting
        opportunities tailored to your skills.
      </p>
      <div className="space-x-8">
        <Button variant="purple">Sign Up</Button>
        <Button variant="purpleReverse">Log In</Button>
      </div>
    </main>
  );
}
