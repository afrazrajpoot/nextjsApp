"use client";
import { createPassword } from "@/data/data";
import { Button } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const CreatePasswordForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <main className=" p-[1vw] mt-[1vw]">
      <h1 className="font-bold">Create new Password</h1>
      <div className="mt-[1vw]">
        <div className="mb-4">
          <label
            htmlFor=""
            className="md:text-[0.8vw] text-[4vw] font-medium text-[#1B1B1B] "
          >
            Old password
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 block w-full rounded-md outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-[0.8vw] placeholder:text-[#A3A3A3] bg-[#FAFAFA] md:p-[0.5vw] p-[4vw]"
          />
        </div>
        <div className="border-[1px] border-b-[#EEEEEE] mt-[2vw]"></div>
        <div className="mt-[1.5vw]">
          {createPassword?.map((field, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={field.name}
                className="block  font-medium text-[#1B1B1B] text-[4vw] md:text-[0.8vw]"
              >
                {field.label}
              </label>
              <Controller
                name={field.name}
                control={control}
                defaultValue=""
                rules={field.rules}
                render={({ field: controllerField }) => (
                  <input
                    id={controllerField.name}
                    type={field.type}
                    required
                    {...controllerField}
                    className={`mt-1 block w-full rounded-md outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-[0.8vw] placeholder:text-[#A3A3A3] bg-[#FAFAFA] p-[4vw] md:p-[0.5vw] ${
                      errors[controllerField.name]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        type="submit"
        size="large"
        className=" w-full mt-4 text-[3vw] md:text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
      >
        save changes
      </Button>
    </main>
  );
};

export default CreatePasswordForm;
