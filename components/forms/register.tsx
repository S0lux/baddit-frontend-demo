"use client";

import { FormTextInput } from "../input/text-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/schemas/registerFormSchema";
import { z } from "zod";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { motion } from "framer-motion";
import axios, { AxiosError } from "axios";
import { Alert, AlertType } from "../ui/alert";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AlertType>();
  const [message, setMessage] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof registerFormSchema>> = async (data) => {
    setStatus(undefined);
    setLoading(true);

    await axios
      .post("https://api.baddit.life/v1/auth/signup", data)
      .then((res) => {
        setStatus("success");
        setMessage("Account created successfully, please check your email for further instruction.");
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err.response?.data.error.message || "An error occurred, please try again later");
      });

    setLoading(false);
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

      <button type="submit" className="mt-5 h-10 w-full rounded-md bg-accent p-2 text-textPrimary" disabled={loading}>
        {loading ? <ImSpinner2 className="w-full animate-spin" /> : "Register"}
      </button>

      {status && <Alert message={message || ""} type={status} />}
    </form>
  );
};
