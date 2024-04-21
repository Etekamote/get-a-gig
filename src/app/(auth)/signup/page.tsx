"use client";

import Logo from "@/components/logo";
import { useState } from "react";
import StepOne from "./_components/step-one";
import StepTwo from "./_components/step-two";

export default function Page() {
  const [page, setPage] = useState(2);

  return (
    <main className="min-h-screen  flex flex-col gap-y-4 justify-center items-center py-8">
      <Logo variant="small" />
      <h1 className="text-3xl lg:text-4xl">Sign up in 2 steps</h1>
      <p>Step {page}/2</p>
      {page === 1 ? (
        <StepOne setPage={setPage} />
      ) : (
        <StepTwo setPage={setPage} />
      )}
    </main>
  );
}
