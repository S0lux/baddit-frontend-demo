"use client";

import { FormTextInput } from "../input/text-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/schemas/registerFormSchema";
import { z } from "zod";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { motion } from "framer-motion";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof registerFormSchema>> = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 5000);
  };

  return (
    <form className="flex w-full flex-col items-start gap-5" onSubmit={handleSubmit(onSubmit)}>
      <FormTextInput
        type="text"
        title="Username"
        {...register("username", { required: "Username is required" })}
        error={errors.username?.message}
      />
      <FormTextInput type="text" title="Email" {...register("email")} error={errors.email?.message} />
      <FormTextInput type="password" title="Password" {...register("password")} error={errors.password?.message} />

      <button type="submit" className="bg-accent text-textPrimary mt-5 h-10 w-full rounded-md p-2" disabled={loading}>
        {loading ? <ImSpinner2 className="w-full animate-spin" /> : "Register"}
      </button>
    </form>
  );
};
