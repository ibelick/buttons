import { ArrowDownIcon } from "@radix-ui/react-icons";

export function BlackIcon2() {
  return (
    <>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
        <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
          Hover me
        </div>
        <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowDownIcon className="h-6 w-6" />
        </div>
      </button>
    </>
  );
}
