export function BlueLoading1() {
  return (
    <button
      className="inline-flex h-12 items-center rounded-lg bg-blue-500 px-6 text-neutral-50 disabled:pointer-events-none disabled:opacity-50 "
      disabled
    >
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
      <span className="ml-2">Loading... </span>
    </button>
  );
}
