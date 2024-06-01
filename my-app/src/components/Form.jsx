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
import { formData } from "@/data/data";
const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      {formData.map((field, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 text-[0.8vw]"
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
                className={`mt-1 block w-full rounded-md outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-[0.8vw] placeholder:text-[#A3A3A3] bg-[#FAFAFA] p-[0.5vw] ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={
                  (index === 0 && "e.g San Address") ||
                  (index === 1 && "e.g sanandreas@gmail.com") ||
                  (index === 2 && "Must be at least 8 character")
                }
              />
            )}
          />
        </div>
      ))}
      <div className="mb-4  ">
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

export default Form;
