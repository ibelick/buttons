import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackIcon11() {
  return (
    <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
      <span className="z-10 pr-2">Hover me</span>
      <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
        <div className="mr-3.5 flex items-center justify-center">
          <ArrowRightIcon className="h-5 w-5 text-neutral-50" />
        </div>
      </div>
    </button>
  );
}
