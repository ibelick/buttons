import { ArrowRightIcon } from "@radix-ui/react-icons";

const Button19 = () => {
  return (
    <>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-black px-6 font-medium text-neutral-200">
        <div className="mr-2 w-0 -translate-x-[200%] opacity-0 transition-all duration-200 group-hover:w-6 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
        <span>Hover me</span>
      </button>
    </>
  );
};

export default Button19;
