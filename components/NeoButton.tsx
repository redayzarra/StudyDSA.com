import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

interface Props {
  className?: string;
  onClick?: () => void;
}

const NeoButton = ({
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <>
      {/* Light button */}
      <button
        onClick={onClick}
        className={cn(
          `
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-foreground
        dark:hidden
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-yellow-600
        
    `,
          className,
          font.className
        )}
      >
        {children}
      </button>

      {/* Dark mode button */}
      <button
        onClick={onClick}
        className="hidden w-full dark:inline-block bg-slate-800 no-underline p-px group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full text-xs font-semibold leading-6 text-white"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div
          className={cn(
            "relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10",
            className,
            font.className
          )}
        >
          {children}
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </>
  );
};

export default NeoButton;
