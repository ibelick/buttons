import { UpdateIcon } from "@radix-ui/react-icons";

export function White3() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
      <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
        Hover me
      </div>
      <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
        <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className="z-10">Hover me</span>
      </div>
    </button>
  );
}
