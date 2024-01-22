import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackIcon8() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
      <span>Hover me</span>
      <div className="ml-1 transition group-hover:translate-x-1">
        <ArrowRightIcon className="h-5 w-5" />
      </div>
    </button>
  );
}
