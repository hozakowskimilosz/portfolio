import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  to?: string;
}

function Link({ children, to }: LinkProps) {
  return (
    <a
      {...(to ? { href: to, target: "_blank" } : {})}
      className="relative italic text-gray-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all after:content-[''] hover:after:w-[100%]"
    >
      {children}
    </a>
  );
}

export default Link;
