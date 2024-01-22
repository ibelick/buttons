import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackIcon10() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
      <span>Hover me</span>
      <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
        <ArrowRightIcon className="h-5 w-5" />
      </div>
    </button>
  );
}
