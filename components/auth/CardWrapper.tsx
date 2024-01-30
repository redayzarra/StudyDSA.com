"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface Props {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  drawAttention?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
  drawAttention,
}: Props) => {
  return (
    <Card className="w-[400px] mx-3 shadow-md dark:border-t-2 dark:border-t-white/20">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          drawAttention={drawAttention}
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
