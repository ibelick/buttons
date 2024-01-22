import { ArrowRightIcon } from "@radix-ui/react-icons";

export function BlackSquare1() {
  return (
    <button className="relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-neutral-950 transition-colors  hover:bg-neutral-800">
      <div>
        <ArrowRightIcon className="h-5 w-5 text-neutral-200" />
      </div>
    </button>
  );
}
