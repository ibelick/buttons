export function Blue1() {
  return (
    <button className="group relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition">
      <span>Hover me</span>
      <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
    </button>
  );
}
