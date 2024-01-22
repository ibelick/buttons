import { ArrowRightIcon } from "@radix-ui/react-icons";

export function SquareOutline1() {
  return (
    <button className="relative inline-flex h-12 w-12 items-center justify-center rounded-md border border-neutral-300 bg-transparent transition-colors hover:bg-neutral-200">
      <ArrowRightIcon className="h-5 w-5 text-neutral-600" />
    </button>
  );
}
