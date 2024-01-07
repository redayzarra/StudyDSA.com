"use client";

import React, { useCallback, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import { HashLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Verify your email"
      backButtonHref="/login"
      backButtonLabel="Back to Login"
    >
      <div className="flex items-center w-full justify-center animate">
        <HashLoader color="#f9cb14" />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
