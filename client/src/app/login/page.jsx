"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthForm = ({ onSubmit, errors, register, isSignUp, setShowPage }) => {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <h1 className="text-2xl font-bold">
            {isSignUp ? "Signup Page" : "Login Page"}
          </h1>
          <Input
            type="text"
            placeholder="Full name"
            {...register("name")}
            className={!isSignUp ? "hidden" : "w-56"}
          />
          <Input
            type="email"
            placeholder="Email or phone number"
            {...register("email")}
            className="w-56"
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-56"
          />
          {errors.password && <span>This field is required</span>}
          <Link href="#" className="text-[#DA921D] text-sm self-end font-bold">
            Forgot password?
          </Link>
          <Button className="bg-[#da921d] text-base">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </form>
        <div className="flex items-center justify-center space-x-4">
          <hr className="w-12 border-t border-gray-300" />
          <span className="text-gray-600 text-sm font-bold">
            Or continue with
          </span>
          <hr className="w-12 border-t border-gray-300" />
        </div>
        <div className="flex items-center justify-center space-x-4">
          {["Facebook", "Google", "Github"].map((platform) => (
            <Link href="#" key={platform}>
              <Image
                src={`/images/${platform}.svg`}
                width={40}
                height={40}
                alt={platform}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <p className="text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link
              href="#"
              onClick={
                isSignUp ? () => setShowPage(false) : () => setShowPage(true)
              }
              className="text-[#4285F4] underline text-sm"
            >
              {isSignUp ? "Login here" : "Sign up here"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPage, setShowPage] = useState(false);

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
      {showPage ? (
        <AuthForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          register={register}
          isSignUp={true}
          setShowPage={setShowPage} // Pass setShowPage to AuthForm
        />
      ) : (
        <AuthForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          register={register}
          isSignUp={false}
          setShowPage={setShowPage} // Pass setShowPage to AuthForm
        />
      )}
    </div>
  );
};

export default LoginPage;
