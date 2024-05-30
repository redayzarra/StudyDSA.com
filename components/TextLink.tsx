import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
  external?: boolean;
}

const TextLink = ({ children, href, external = false }: PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : ""}
      rel={external ? "noopener noreferrer" : ""}
      className="underline text-yellow-500 dark:text-primary font-medium"
    >
      {children}
    </Link>
  );
};

export default TextLink;
