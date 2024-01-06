"use client";

import { login } from "@/actions/login";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
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

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailUsername: "",
      password: "",
    },
  });

  // Error will determine if I should be destructive, and message
  // will be a any message I recieve.
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");

  // Acts as my loading state
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    // Make sure to reinitialize the error and message as defaults
    setError(false);
    setMessage("");

    startTransition(() => {
      login(values).then((data) => {
        // If there is an error, then mark error to be true
        if (data.error) {
          setError(true);
          setMessage(data.error);
          // Error is already false so we can store the message
        } else {
          setMessage(data.success);
        }
      });
    });
  };

  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email is being used with a different provider"
      : "";

  useEffect(() => {
    if (urlError) {
      setError(true);
      setMessage(urlError);
    }
  }, [urlError]);

  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonHref="/register"
      backButtonLabel="Don't have an account?"
      showSocial
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Enter your password"
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
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
