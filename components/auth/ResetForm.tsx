"use client";

import { reset } from "@/actions/reset";
import { resetSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import FormResult from "./FormResult";
import NeoButton from "../NeoButton";

const ResetForm = () => {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      emailUsername: "",
    },
  });

  // Error will determine if I should be destructive, and message
  // will be a any message I recieve.
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");

  // Acts as my loading state
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof resetSchema>) => {
    // Make sure to reinitialize the error and message as defaults
    setError(false);
    setMessage("");

    startTransition(() => {
      reset(values).then((data) => {
        // If there is an error, then mark error to be true
        if (data?.error) {
          setError(true);
          setMessage(data?.error);
          // Error is already false so we can store the message
        } else {
          setMessage(data?.success);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Reset your password"
      backButtonHref="/login"
      backButtonLabel="Back to Login"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="emailUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email or username"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormResult message={message} error={error} />
          <NeoButton className="w-full">
            <span className="w-full flex-grow text-base">Send Email</span>
          </NeoButton>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetForm;
