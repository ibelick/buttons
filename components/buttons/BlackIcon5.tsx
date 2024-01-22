import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackIcon5() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
      <span>Hover me</span>
      <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
        <ArrowRightIcon className="h-5 w-5" />
      </div>
    </button>
  );
}
