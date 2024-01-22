export function Black12() {
  return (
    <button className="group relative isolate z-10 h-12 overflow-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
      <span>Hover Me</span>
      <span className="absolute left-0 -z-10 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
    </button>
  );
}
