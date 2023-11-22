import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const LogInButton = () => {
  return (
    <Link href="/sign-in">
      <Button size="sm" className="font-semibold">
        Sign In
      </Button>
    </Link>
  );
};

export default LogInButton;
