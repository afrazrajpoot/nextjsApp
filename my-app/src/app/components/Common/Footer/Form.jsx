"use client";
import {
  Button,
  FormControlLabel,
  Radio,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { formData } from "@/data/data";

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full ">
      {formData.map((field, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 text-[2vw] lg:text-[0.7vw] sm:text-[2vw]"
          >
            {field.label}
          </label>
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.rules}
            render={({ field: controllerField }) => (
              <div className="relative">
                <input
                  id={field.name}
                  type={
                    field.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  required
                  {...controllerField}
                  className={`mt-1 block w-full lg:p-[0.5vw] sm:p-[2vw] rounded-md outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm lg:placeholder:text-[0.8vw] placeholder:text-[2vw] placeholder:text-[#A3A3A3] bg-[#FAFAFA] p-[0.5vw] ${
                    errors[controllerField.name]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder={
                    (index === 0 && "e.g San Address") ||
                    (index === 1 && "e.g sanandreas@gmail.com") ||
                    (index === 2 && "Must be at least 8 character")
                  }
                />
                {field.type === "password" && (
                  <InputAdornment
                    position="end"
                    className="absolute inset-y-0 right-0 flex items-center  pr-3 top-[5vw] lg:top-[1.2vw]"
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                      style={{ padding: "0.3vw" }}
                    >
                      {showPassword ? (
                        <Visibility className="text-[5vw] lg:text-[1vw]" />
                      ) : (
                        <VisibilityOff className="text-[5vw] lg:text-[1vw]" />
                      )}
                    </IconButton>
                  </InputAdornment>
                )}
              </div>
            )}
          />
        </div>
      ))}
      <div className="mb-4">
        <FormControlLabel value="female" control={<Radio size="small" />} />
        <label
          htmlFor=""
          className="lg:text-[0.9vw] text-[2.5vw] ml-[-4vw] lg:ml-[-1vw] sm:ml-[0.2vw] sm:text-[2vw]"
        >
          Opt out of emails about latest product updates
        </label>
      </div>

      <Button
        type="submit"
        size="large"
        className="w-full mt-4 text-[2vw] lg:text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
