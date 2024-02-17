import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
  drawAttention?: boolean;
}

const BackButton = ({ label, href, drawAttention = false }: Props) => {
  return drawAttention ? (
    <Button className="mx-auto" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  ) : (
    <Button
      variant="link"
      className="font-normal text-[0.8rem] mx-auto text-foreground"
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
