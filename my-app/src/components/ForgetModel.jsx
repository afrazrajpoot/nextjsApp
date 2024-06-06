"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Form from "./Form";
import Image from "next/image";
import SigninForm from "./SigninForm";
import ForgetForm from "./ForgetForm";

export default function ForgetModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full relative">
      <Button onClick={handleOpen}>Forget password modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center h-screen">
          <div className="relative bg-white p-4 rounded-[0.5vw] shadow-lg w-full max-w-[28vw] mt-[-3vw] flex flex-col gap-[1vw]">
            <div className="flex w-full justify-center">
              <Image src="/img/Logo.png" alt="logo" width={150} height={150} />
            </div>
            <h1 className="font-bold text-[1.2vw] text-center">
              Forgot your password?
            </h1>
            <p className="text-center text-[0.8vw]">
              We'll send you an email with a link to reset your password.
            </p>
            <ForgetForm />
          </div>
          <Button className="absolute top-[32vw]">
            <IconButton
              onClick={handleClose}
              style={{
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "50%",
                width: "2vw",
                height: "2vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Button>
        </div>
      </Modal>
    </div>
  );
}
