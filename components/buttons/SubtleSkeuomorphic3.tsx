import { GlobeIcon } from "@radix-ui/react-icons";

export function SubtleSkeuomorphic3() {
  return (
    <button
      className="group flex h-8 w-8 select-none items-center justify-center rounded-lg bg-white leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]"
      aria-label="Change language"
    >
      <span className="flex items-center group-active:[transform:translate3d(0,1px,0)]">
        <GlobeIcon className="inline-block h-4 w-4 text-zinc-800" />
      </span>
    </button>
  );
}
