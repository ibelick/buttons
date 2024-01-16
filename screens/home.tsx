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
    <div className="relative flex items-center justify-center rounded-xl bg-white px-8 py-32 backdrop-blur ">
      {children}
    </div>
  );
};

export const Home = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
      <main>
        <section>
          <h1 className="">Explore a collection of button</h1>
        </section>
        <section className="mx-auto">
          <div className="grid grid-cols-3">
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
