"use client";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import SignupModel from "@/app/components/authModel/register/SignupModel";
import SigninModel from "@/app/components/authModel/register/SigninModel";
import ForgetModel from "@/app/components/authModel/forgotPassword/ForgetModel";
import Otp from "@/app/components/authModel/Otp";
import OtpModel from "@/app/components/authModel/otp/OtpModel";
import ResetModel from "@/app/components/authModel/resetModal/ResetModel";

const page = () => {
  return (
    <main className="absolute top-[8vw]">
      <SignupModel />
      <SigninModel />
      <ForgetModel />
      <OtpModel />
      <ResetModel />
    </main>
  );
};

export default page;
