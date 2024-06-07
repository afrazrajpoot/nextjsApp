"use client";
import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { loginFormData } from "@/data/data";
import { useGlobalContext } from "@/context/globalState";

const SigninForm = () => {
  const { tokenInLocal, setLoginModel } = useGlobalContext();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    setLoginModel(false);
    console.log(data);
    tokenInLocal(data);
    // Reset form data after submission is handled by React Hook Form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      {loginFormData.map((field, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 text-[0.8vw]"
          >
            {field.label}
          </label>
          <div className="relative">
            <Controller
              name={field.name}
              control={control}
              defaultValue=""
              rules={{
                required: `${field.label} is required`,
                pattern:
                  field.type === "email"
                    ? { value: /\S+@\S+\.\S+/, message: "Email is not valid" }
                    : {},
                minLength:
                  field.type === "password"
                    ? {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      }
                    : {},
              }}
              render={({ field: controllerField }) => (
                <input
                  {...controllerField}
                  id={field.name}
                  type={
                    field.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  className={`mt-1 block w-full rounded-md outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-[0.8vw] placeholder:text-[#A3A3A3] bg-[#FAFAFA] p-[0.5vw] border-gray-300 ${
                    errors[field.name] ? "border-red-500" : ""
                  }`}
                  placeholder={
                    (index === 0 && "e.g sanandreas@gmail.com") ||
                    (index === 1 && "Must be at least 8 characters")
                  }
                />
              )}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-[0.7vw]">
                {errors[field.name].message}
              </p>
            )}
            {field.type === "password" && (
              <InputAdornment
                position="end"
                className="absolute inset-y-0 right-0 flex items-center pr-3 top-[1.2vw]"
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  size="small"
                  style={{ padding: "0.3vw" }}
                >
                  {showPassword ? (
                    <Visibility style={{ fontSize: "1vw" }} />
                  ) : (
                    <VisibilityOff style={{ fontSize: "1vw" }} />
                  )}
                </IconButton>
              </InputAdornment>
            )}
          </div>
        </div>
      ))}
      <p className="text-[0.7vw] text-[#FF387A] ml-[19.6vw] font-bold w-full max-w-[30vw]">
        Forget password?
      </p>
      <div className="mb-4">
        <FormControlLabel value="female" control={<Radio size="small" />} />
        <label htmlFor="" className="text-[0.9vw] ml-[-1vw]">
          Opt out of emails about latest product updates
        </label>
      </div>

      <Button
        type="submit"
        size="large"
        className="w-full mt-4 text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
      >
        Submit
      </Button>
    </form>
  );
};

export default SigninForm;
