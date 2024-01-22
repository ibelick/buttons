export function Black13() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
      <span className="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
      <span className="relative">Hover me</span>
    </button>
  );
}
