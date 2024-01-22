import { UpdateIcon } from "@radix-ui/react-icons";

export function BlackLoading1() {
  return (
    <button
      disabled
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 disabled:pointer-events-none disabled:opacity-50"
    >
      <UpdateIcon className="mr-1 h-5 w-5 animate-spin text-white" />
      <span>Loading...</span>
    </button>
  );
}
