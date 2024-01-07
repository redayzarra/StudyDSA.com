"use client";

import { newPasswordSchema } from "@/schemas";
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
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/newPassword";

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Error will determine if I should be destructive, and message
  // will be a any message I recieve.
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");

  // Acts as my loading state
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    // Make sure to reinitialize the error and message as defaults
    setError(false);
    setMessage("");

    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      setError(true);
      setMessage("Passwords don't match");
      return;
    }

    startTransition(() => {
      newPassword(values, token).then((data) => {
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
      headerLabel="Create a new password"
      backButtonHref="/login"
      backButtonLabel="Back to Login"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter a new password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Re-enter password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormResult message={message} error={error} />
          <Button type="submit" className="w-full shadow-lg font-semibold">
            Confirm
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default NewPasswordForm;
