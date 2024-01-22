import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackRound2() {
  return (
    <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
      <div className="transition duration-300 group-hover:rotate-[360deg]">
        <ArrowRightIcon className="h-5 w-5 text-neutral-200" />
      </div>
    </button>
  );
}
