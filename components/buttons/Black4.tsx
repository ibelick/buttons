export function Black4() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
        Hover me
      </div>
      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
        Hover me
      </div>
    </button>
  );
}
