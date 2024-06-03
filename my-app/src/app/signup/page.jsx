"use client";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import SignupModel from "@/components/SignupModel";
import SigninModel from "@/components/SigninModel";
import ForgetModel from "@/components/ForgetModel";
import Otp from "@/components/Otp";
import OtpModel from "@/components/OtpModel";
import ResetModel from "@/components/ResetModel";

const page = () => {
  return (
    <>
      <SignupModel />
      <SigninModel />
      <ForgetModel />
      <OtpModel />
      <ResetModel />
    </>
  );
};

export default page;
