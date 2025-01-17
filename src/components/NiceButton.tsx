import { cn } from '@/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NiceButton: React.FC<ButtonProps> = ({ className, children, href, ...props }) => {
  return (
    <Link
      href={href ?? "#"}
      className={cn(
        "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-black px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
      </span>
      <div
        className="
    absolute -z-10 
    -left-[75px] -top-[50px] 
    h-[155px] w-8 
    rotate-[35deg] 
    bg-white opacity-20 
    transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] 
    group-hover:left-[120%] group-hover:opacity-0
  ">
      </div>
    </Link>
  );
};

export default NiceButton;

