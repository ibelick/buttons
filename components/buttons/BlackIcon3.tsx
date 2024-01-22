import { ArrowRightIcon, StarIcon } from "@radix-ui/react-icons";

export function BlackIcon3() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
      <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
        <div className="absolute -translate-x-4 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100">
          <StarIcon className="h-5 w-5" />
        </div>
        <span className="pr-6">Hover</span>
        <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
      </div>
    </button>
  );
}
