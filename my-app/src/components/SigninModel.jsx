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
import { useGlobalContext } from "@/context/globalState";

export default function SigninModel() {
  const { setLoginModel, openLoginModel } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setLoginModel(false);
  };

  return (
    <div className="w-full relative">
      <Modal
        open={openLoginModel}
        // onClose={closeLoginModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center h-screen">
          <div className="relative bg-white p-4 rounded-[0.5vw] shadow-lg w-full max-w-[28vw] mt-[-3vw] flex flex-col gap-[1vw]">
            <div className="flex w-full justify-center">
              <Image src="/img/Logo.png" alt="logo" width={150} height={150} />
            </div>
            <h1 className="font-bold text-[1.2vw] text-center">
              Great to see you here!
            </h1>
            <p className="text-center text-[1vw] w-full max-w-[17vw] mx-auto">
              Great to have you back! Log in
            </p>
            <SigninForm />
            <div className="flex items-center w-full gap-[0.3vw]">
              <div className="border flex-grow"></div>
              <div className="px-[0.5vw] py-[0.3vw] text-[0.8vw] text-[#737373]">
                Or Sign Up with
              </div>
              <div className="border flex-grow"></div>
            </div>
            <div className="flex w-full gap-[2vw] justify-center items-center">
              <Button
                variant="outlined"
                className="w-full max-w-[12vw] flex items-center gap-[2vw] bg-[#FFFFFF] border-[1px] border-[#E5E5E5]"
                style={{
                  backgroundColor: "#FAFAFA",
                  color: "#171717",
                  fontSize: "0.8vw",
                  fontWeight: "bold",
                  boxShadow: "none",
                }}
              >
                <div className="ml-[-3vw]">
                  <Image src={"/img/google.png"} height={12} width={12} />
                </div>
                <div className="pl-[0.5vw]">
                  <p>Google</p>
                </div>
              </Button>

              <Button
                variant="outlined"
                className="w-full max-w-[12vw] flex items-center gap-[2vw] border-[1px] border-[#E5E5E5]"
                style={{
                  backgroundColor: "#FAFAFA",
                  color: "#171717",
                  fontSize: "0.8vw",
                  fontWeight: "bold",
                }}
              >
                <div className="ml-[-2vw]">
                  <Image src={"/img/facebook.png"} height={12} width={12} />
                </div>
                <div className="pl-[0.5vw]">
                  <p>Facebook</p>
                </div>
              </Button>
            </div>
          </div>
          <Button className="absolute top-[40vw]">
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
