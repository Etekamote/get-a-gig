import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "@/components/container";

export default function Page() {
  return (
    <Container>
      <main className="min-h-screen  flex flex-col gap-y-4 justify-center items-center py-8">
        <Logo variant="small" />
        <h1 className="text-3xl lg:text-4xl text-center">
          Login to get access to GetAGig.com
        </h1>
        <form className="gap-y-4 flex flex-col justify-center max-w-[80%]">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
          </div>

          <Button
            variant="purpleReverse"
            className=" flex items-center  gap-x-2 "
            type="button"
          >
            <span>Login</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4" />
          </Button>
        </form>
      </main>
    </Container>
  );
}
