import { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type StepTwoProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function StepTwo({ setPage }: StepTwoProps) {
  return (
    <>
      <form className="gap-y-4 flex flex-col justify-center max-w-[80%] ">
        <Button
          variant="purpleReverse"
          className=" w-24 flex items-center text-xs gap-x-2 "
          type="button"
          onClick={() => setPage(1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </Button>
        <div className="space-y-1">
          <Label htmlFor="firstName">First name</Label>
          <Input type="text" id="firstName" />
        </div>
        <div>
          <Label htmlFor="surname">Surname</Label>
          <Input type="text" id="surname" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <Input type="text" id="location" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="select">Account type</Label>
          <Select>
            <SelectTrigger id="select">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Looking for a job</SelectItem>
              <SelectItem value="banana">
                I&apos;m looking for someone to hire
              </SelectItem>
              <SelectItem value="blueberry">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="specialization">Your specialization</Label>
          <p className="text-xs text-white/70">
            If you have more than one, separate them with a comma without a
            space, ex. &quot;programming, design, marketing&quot;
          </p>
          <Input type="text" id="specialization" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="bio">About you</Label>
          <Textarea id="bio" autoCorrect="false" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="picture">Upload profile pictue</Label>
          <Input type="file" id="picture" className="text-white" />
        </div>
      </form>
      <Button variant="purple" className="font-bold w-60 mt-8">
        Sign up!
      </Button>
    </>
  );
}
