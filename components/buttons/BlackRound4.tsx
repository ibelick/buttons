import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackRound4() {
  return (
    <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32">
      <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
        Hover me
      </div>
      <div className="absolute right-3.5">
        <ArrowRightIcon className="h-5 w-5" />
      </div>
    </button>
  );
}
