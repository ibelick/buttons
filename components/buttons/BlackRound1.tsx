import { ArrowRightIcon, StarIcon } from "@radix-ui/react-icons";

export function BlackRound1() {
  return (
    <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
      <div className="translate-x-0 transition group-hover:translate-x-[300%]">
        <ArrowRightIcon className="h-5 w-5" />
      </div>
      <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
        <ArrowRightIcon className="h-5 w-5" />
      </div>
    </button>
  );
}
