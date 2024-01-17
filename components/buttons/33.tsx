import { ArrowRight } from "lucide-react";

const Button33 = () => {
  return (
    <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-black">
      <div className="transition duration-300 group-hover:rotate-[360deg]">
        <ArrowRight className="h-5 w-5 text-neutral-200" />
      </div>
    </button>
  );
};

export default Button33;
