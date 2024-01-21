"use client";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";

type CardComponentProps = {
  children: React.ReactNode;
  code: string;
};

export const CardComponent: React.FC<CardComponentProps> = ({
  children,
  code,
}) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    toast.success("Button code copied to clipboard!");
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className="relative flex items-center justify-center rounded-[4px] bg-neutral-50 px-0 py-32 md:px-2 md:py-32">
      <div
        className="absolute right-3 top-3 cursor-pointer bg-transparent p-2"
        onClick={onCopy}
      >
        <div
          className={`absolute inset-0  transform transition-all duration-300  ${
            hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <CopyIcon className="text-neutral-600" />
        </div>
        <div
          className={`absolute inset-0 transform transition-all duration-300  ${
            hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <CheckIcon className="text-neutral-600" />
        </div>
      </div>
      {children}
    </div>
  );
};
