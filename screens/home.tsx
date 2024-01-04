import React from "react";
import { Signup } from "@/components/app/signup";

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <main className="flex flex-col">
        <h1 className="">Explore the best, hand-picked, real web interfaces</h1>
        <div className="mt-4">
          <Signup />
        </div>
      </main>
    </div>
  );
};
