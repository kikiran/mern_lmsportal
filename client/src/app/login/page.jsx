"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-row gap-10 p-4">
      <div className="w-1/2">
        <Image
          src="/images/image.svg"
          width={600}
          height={100}
          alt="login-page"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 items-center justify-center"
          >
            <h1 className="text-2xl font-bold">Login Page</h1>
            <Input
              type="email"
              placeholder="Email or phone number"
              {...register("example")}
              className="w-56"
            />
            <Input
              type="password"
              placeholder="password"
              {...register("exampleRequired", { required: true })}
              className="w-56"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <Link
              href="#"
              className="text-[#DA921D] text-sm self-end font-bold"
            >
              Forgot password?
            </Link>
            <Button className="bg-[#da921d] text-base">Login</Button>
          </form>
          <div className="flex items-center justify-center space-x-4">
            <hr className="w-12 border-t border-gray-300" />
            <span className="text-gray-600 text-sm font-bold">
              Or continue with
            </span>
            <hr className="w-12 border-t border-gray-300" />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link href="#">
              <Image
                src="/images/Facebook.svg"
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/Google.svg"
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/github.svg"
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
          </div>
          <div className="flex justify-end justify-items-end">
            <p className="text-sm">
              Don't have account?{" "}
              <Link href="#" className="text-[#4285F4] underline text-sm">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
