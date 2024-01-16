const Button9 = () => {
  return (
    <button className="relative overflow-hidden rounded-xl border border-neutral-200 bg-transparent px-4 py-2 text-black before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:-translate-x-full before:bg-neutral-100 before:transition-transform hover:before:translate-x-0">
      <span className="relative">Hover me</span>
    </button>
  );
};

export default Button9;
