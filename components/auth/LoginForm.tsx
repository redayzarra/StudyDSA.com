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
import Link from "next/link";
import NeoButton from "../NeoButton";

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
      login(values, callbackUrl).then((data) => {
        // If data is undefined or there is an error, mark error as true
        if (!data || data.error) {
          setError(true);
          setMessage(data?.error || 'An unexpected error occurred');
        } else {
          setMessage(data.success);
        }
      });
    });
  };

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
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
                      className="bg-transparent"
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
                      className="bg-transparent"
                      disabled={isPending}
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                    />
                  </FormControl>
                  <Button
                    variant="link"
                    size="sm"
                    asChild
                    className="px-0 font-normal text-[0.8rem] text-foreground"
                  >
                    <Link href="/reset-password">Forgot password?</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormResult message={message} error={error} />
          <NeoButton className="w-full">
            <span className="w-full flex-grow text-base">Login</span>
          </NeoButton>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;

