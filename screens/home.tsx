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
    <div className="relative flex items-center justify-center rounded-xl bg-neutral-200 px-8 py-32 backdrop-blur ">
      <div className="absolute right-5 top-3">
        <Link href={`/${slug}`}>
          <ArrowRightIcon className="h-5 w-5 text-slate-400" />
        </Link>
      </div>
      {/* set the components to 160px */}
      <div className="[&>button]:w-40 [&>div]:w-40 [&>input]:w-40">
        {children}
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <main className="flex flex-col">
        <section>
          <h1 className="">Explore a collection of button</h1>
        </section>
        <section className="mx-auto max-w-7xl py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BUTTONS.map((item, index) => (
              <CardComponent key={index} slug={`/${index}`}>
                <item.component />
              </CardComponent>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
