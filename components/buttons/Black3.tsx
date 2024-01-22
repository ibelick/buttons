export function Black3() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
      <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
        Hover me
      </div>
      <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
        Hover me
      </div>
    </button>
  );
}
