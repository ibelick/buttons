export function Letters3() {
  return (
    <button className="group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950">
      <span className="relative inline-flex overflow-hidden">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
          Hover me
        </div>
        <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          Hover me
        </div>
      </span>
    </button>
  );
}
