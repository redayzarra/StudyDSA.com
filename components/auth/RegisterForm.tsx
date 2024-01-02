"use client";

import { login } from "@/actions/login";
import { registerSchema } from "@/schemas";
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
import { register } from "@/actions/register";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // Error will determine if I should be destructive, and message
  // will be a any message I recieve.
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");

  // Acts as my loading state
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    // Make sure to reinitialize the error and message as defaults
    setError(false);
    setMessage("");

    startTransition(() => {
      register(values).then((data) => {
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

  return (
    <CardWrapper
      headerLabel="Welcome to the community!"
      backButtonHref="/login"
      backButtonLabel="Already have an account?"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="E.g. TheCapn"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="E.g. steve.rodgers@gmail.com"
                      type="email"
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
                      placeholder="Enter a password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormResult message={message} error={error} />
          <Button type="submit" className="w-full shadow-md">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
