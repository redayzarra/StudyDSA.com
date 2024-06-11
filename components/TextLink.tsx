import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
  external?: boolean;
  className?: string;
}

const TextLink = ({
  className,
  children,
  href,
  external = false,
}: PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : ""}
      rel={external ? "noopener noreferrer" : ""}
      className={cn(`underline text-primary font-medium`, className)}
    >
      {children}
    </Link>
  );
};

export default TextLink;
