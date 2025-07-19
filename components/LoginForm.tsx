"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form validated successfully");
      console.log(values);
      //   Save user data to local storage
      localStorage.setItem("user", JSON.stringify(values.email));
    router.push("/users");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                      <Input
                          type="email"
                  placeholder="Email"
                  {...field}
                  className="rounded-[5px] border-[#545F7D26] py-[18px] pl-4 text-sm placeholder:text-[#545F7D]"
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
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="rounded-[5px] border-[#545F7D26] py-[18px] pl-4 text-sm placeholder:text-[#545F7D]"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((pwd) => !pwd)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-xs uppercase font-semibold text-[#39CDCC]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="cursor-pointer text-xs font-semibold text-[#39CDCC] uppercase underline-offset-2 hover:underline">
          Forgot password?
        </p>
        <Button
          type="submit"
          className="w-full cursor-pointer rounded-[8px] bg-[#39CDCC] text-sm font-semibold text-white uppercase hover:bg-[#39cdcddd]"
        >
          Log in
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
