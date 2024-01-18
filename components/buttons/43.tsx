import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Button43 = () => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-black px-6 font-medium text-neutral-200">
      <span>Hover me</span>
      <div className="relative ml-1 h-5 w-5 overflow-hidden">
        <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
          <ArrowTopRightIcon className="h-5 w-5" />
          <ArrowTopRightIcon className="h-5 w-5 -translate-x-4" />
        </div>
      </div>
    </button>
  );
};

export default Button43;
