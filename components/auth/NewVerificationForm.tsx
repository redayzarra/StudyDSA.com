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

  const [loading, setLoading] = useState(true);  // State to handle loading
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");

  const onSubmit = useCallback(() => {
    setLoading(true); // Start loading when onSubmit is called
    if (!token) {
      setError(true);
      setMessage("Missing token. Please send a new email");
      setLoading(false); // Stop loading if there is no token
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
        setLoading(false); // Stop loading once data is received
      })
      .catch((error) => {
        setError(true);
        setMessage("An error occurred during verification.");
        setLoading(false); // Stop loading if there is an error
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
      drawAttention
    >
      <div className="flex items-center w-full my-3 justify-center animate">
        {loading ? <HashLoader color="#f9cb14" /> : <FormResult message={message} error={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;