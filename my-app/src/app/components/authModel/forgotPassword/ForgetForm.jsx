"use client";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { forgetForm, formData, loginFormData } from "@/data/data";
const ForgetForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      {forgetForm.map((field, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 text-[2vw] lg:text-[0.8vw]"
          >
            {field.label}
          </label>
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.rules}
            render={({ field }) => (
              <input
                id={field.name}
                type={field.type}
                required
                {...field}
                className={`mt-1 block w-full rounded-md sm:p-[2vw] sm:text-[2vw] outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 lg:text-[0.8vw] p-[2vw] text-[4vw] lg:placeholder:text-[0.8vw] placeholder:text-[3vw] sm:placeholder:text-[2vw] placeholder:text-[#A3A3A3] bg-[#FAFAFA] lg:p-[0.5vw] ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={"Must be at least 8 character"}
              />
            )}
          />
        </div>
      ))}

      <Button
        type="submit"
        size="large"
        className="w-full mt-4 text-[2vw] lg:text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
      >
        Send me a reset link
      </Button>
    </form>
  );
};

export default ForgetForm;
