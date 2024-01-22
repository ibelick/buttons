export function BlackSmLoading1() {
  return (
    <button
      className="inline-flex cursor-pointer items-center rounded-[8px] bg-neutral-950 px-3 py-1 text-sm text-neutral-100 transition-colors hover:bg-neutral-800 active:bg-neutral-700 disabled:pointer-events-none disabled:opacity-50"
      disabled
    >
      <div className="h-3 w-3 animate-spin rounded-full border-2 border-solid border-neutral-100 border-t-transparent" />
      <span className="ml-1">Loading...</span>
    </button>
  );
}
