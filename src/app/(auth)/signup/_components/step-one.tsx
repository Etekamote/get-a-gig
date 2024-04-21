import { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type StepOneProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function StepOne({ setPage }: StepOneProps) {
  return (
    <form className="gap-y-4 flex flex-col justify-center max-w-[80%]">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="repeatPassword">Repeat password</Label>
        <Input type="password" id="repeatPassword" />
      </div>
      <Button
        type="submit"
        variant="purple"
        className="px-8"
        onClick={() => setPage(2)}
      >
        Next
      </Button>
    </form>
  );
}
