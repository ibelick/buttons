import { ButtonIcon, StarIcon } from "@radix-ui/react-icons";
import { BUTTONS } from "@/data/buttons";
import { CardComponent } from "@/components/app/card-component";

const ButtonGithubStar = () => {
  return (
    <a
      href="https://github.com/ibelick/buttons"
      target="_blank"
      className="group relative inline-flex cursor-pointer items-center rounded-md bg-neutral-950 px-3 py-1 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]
    "
    >
      <StarIcon className="h-4 w-4" />
      <span className="ml-1">Star</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </a>
  );
};

export const Home = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-screen-lg border-l-neutral-50 border-r-neutral-50 px-2 pb-12 sm:border-l sm:border-r md:px-6">
      <main>
        <section className="pt-8">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex w-full items-center justify-between">
              <div className="rounded-full bg-neutral-950 px-2">
                <ButtonIcon className="h-4 w-4 text-white" />
              </div>
              <ButtonGithubStar />
            </div>
            <div className="mb-6">
              <h1 className="mb-1 text-xl font-medium text-neutral-900">
                buttons.ibelick
              </h1>
              <div className="text-neutral-800">
                <p>
                  {`Discover a collection of Tailwind CSS buttons designed to enhance your
                  website's look.`}
                </p>
                <p>Easy to integrate with a copy-paste, no js</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {BUTTONS?.map((Comp) => {
              return (
                <CardComponent key={Comp.name}>
                  <Comp />
                </CardComponent>
              );
            })}
          </div>
        </section>
      </main>
      <footer>
        <div className="mb-4 mt-8 ">
          <span className="inline-flex text-sm text-neutral-900">
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
