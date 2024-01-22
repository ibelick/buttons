export function Black10() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50">
      <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
      <span className="relative">Hover me</span>
    </button>
  );
}
