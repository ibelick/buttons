import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { ReactInstance, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { TButton } from "@/data/buttons";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

type CardComponentProps = {
    ChildComponent: TButton;
};

export const CardComponent: React.FC<CardComponentProps> = ({
    ChildComponent,
}) => {
    const [hasCheckIcon, setHasCheckIcon] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(parentRef.current) {
            const parentRoot = createRoot(parentRef.current)
            parentRoot.render(<ChildComponent/>)

        }

    }, [ChildComponent])

    const onCopy = () => {
        const code = parentRef.current?.childNodes[0]!
        if(!code) return

        const htmlElement = ReactDOM.findDOMNode(code)! as Element

        if(!htmlElement) return 

        const html = htmlElement.outerHTML
        toast.success("Copied to clipboard!");
        navigator.clipboard.writeText(html);
        setHasCheckIcon(true);

        setTimeout(() => {
            setHasCheckIcon(false);
        }, 1000);
    };

    return (
        <div className="relative flex items-center justify-center rounded-[4px] bg-neutral-50 px-0 py-24 md:px-2">
            <div
                className="absolute right-3 top-3 cursor-pointer bg-transparent p-2"
                onClick={onCopy}
            >
                <div
                    className={`absolute inset-0  transform transition-all duration-300  ${hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
                        }`}
                >
                    <CopyIcon className="text-neutral-600" />
                </div>
                <div
                    className={`absolute inset-0 transform transition-all duration-300  ${hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                >
                    <CheckIcon className="text-neutral-600" />
                </div>
            </div>
            <div ref={parentRef}  >
            </div>
        </div>
    );
};
