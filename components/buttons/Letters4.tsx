export function Letters4() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950">
      <span className="relative inline-flex overflow-hidden">
        <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
          Hover me
        </div>
        <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
          Hover me
        </div>
      </span>
    </button>
  );
}
