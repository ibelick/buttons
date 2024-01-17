import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BUTTONS } from "@/data/buttons";
import Link from "next/link";

type CardComponentProps = {
  children: React.ReactNode;
  slug: string;
};

const CardComponent: React.FC<CardComponentProps> = ({ children, slug }) => {
  return (
    <div className="relative flex items-center justify-center rounded-[4px] bg-neutral-50 px-0 py-32 md:px-2 md:py-32">
      {children}
    </div>
  );
};

export const Home = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-screen-sm px-2 md:px-8 lg:px-12">
      <main>
        <section className="my-8">
          <h1 className="text-xl font-medium text-neutral-950">Buttons</h1>
          <div className="text-neutral-800">
            <p>
              Collection of Tailwind CSS buttons, ease code copy/paste, no js.
            </p>
          </div>
        </section>
        <section className="mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {BUTTONS.map((Comp, index) => {
              return (
                <CardComponent key={index} slug={`/${index}`}>
                  <Comp />
                </CardComponent>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
