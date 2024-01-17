import React from "react";
import { BUTTONS } from "@/data/buttons";

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
    <div className="relative mx-auto min-h-screen w-full max-w-screen-sm border-l border-r border-l-neutral-50 border-r-neutral-50 px-2 pb-12 md:px-6">
      <main>
        <section className="py-8">
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
      <footer>
        <div className="mt-8">
          <span className="inline-flex">
            Made by{" "}
            <a
              href="https://twitter.com/ibelick"
              className="ml-1 inline-flex hover:underline"
            >
              ibelick
            </a>
          </span>
        </div>
      </footer>
      <div
        className="pointer-events-none fixed bottom-0 left-0 h-24 w-full bg-red-50"
        style={{
          background: "linear-gradient(to bottom,transparent, #fff 10%)",
          maskImage: "linear-gradient(to top, #fff 10%,transparent)",
          backdropFilter: "blur(1px)",
        }}
      />
    </div>
  );
};
