import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import NeoButton from "../NeoButton";

interface Props {
  label: string;
  href: string;
  drawAttention?: boolean;
}

const BackButton = ({ label, href, drawAttention = false }: Props) => {
  return drawAttention ? (
    <NeoButton className="">
      <Link href={href} className="w-full flex-grow text-base">
        {label}
      </Link>
    </NeoButton>
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
