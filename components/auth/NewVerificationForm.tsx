"use client";

import React, { useCallback, useEffect, useState } from "react";
import CardWrapper from "./CardWrapper";
import { HashLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/newVerification";
import FormResult from "./FormResult";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError(true);
      setMessage("Missing token. Please send a new email");
      return;
    }

    newVerification(token)
      .then((data) => {
        if (data.error) {
          setError(true);
          setMessage(data.error);
        } else {
          setMessage(data.success);
        }
      })
      .catch((error) => {
        setError(true);
        setMessage("An error occurred during verification.");
      });
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
        {!error && <HashLoader color="#f9cb14" />}
        <FormResult message={message} error={error} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
