import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
}

const TextLink = ({ children, href }: PropsWithChildren<Props>) => {
  return (
    <a
      href={href}
      className="underline text-primary-foreground dark:text-primary font-medium"
    >
      {children}
    </a>
  );
};

export default TextLink;
