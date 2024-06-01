import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";

const page = () => {
  return (
    <main className="shadow-xl w-full max-w-[30vw] m-auto mt-[5vw] flex flex-col items-center p-[2vw] gap-[3vw] rounded-md">
      <div>
        <Image src={"/img/Logo.png"} height={200} width={200} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[1.5vw]">Great to see you here!</h1>
        <p className="w-full max-w-[15.5vw] text-center text-[1vw]">
          It’s free to create an account. Already have an account? Log in
        </p>
      </div>
      <div className="w-full">
        <Form />
      </div>
      <div className="flex items-center w-full gap-[0.5vw]">
        <div className="border flex-grow"></div> {/* Border */}
        <div className="px-[1vw] py-[0.5vw] text-[1vw] text-[#737373]">
          Or Sign Up with
        </div>{" "}
        {/* Sign Up */}
        <div className="border flex-grow"></div> {/* Border */}
      </div>
      <div className="flex w-full gap-[1vw] justify-center">
        <Button
          variant="outlined"
          className="w-full max-w-[10vw]"
          style={{
            backgroundColor: "#FAFAFA",
            color: "#171717",
            fontSize: "0.8vw",
            fontWeight: "bold",
            //   padding: "0.5vw 1vw",
            // borderRadius: "10px",
            border: "1px solid #E5E5E5",
            boxShadow: "0px 0px 0px 1px #171717",
          }}
        >
          <div className="ml-[-1vw]">
            <Image src={"/img/google.png"} height={15} width={15} />
          </div>
          <div className="pl-[1vw]">
            <p>Google</p>
          </div>
        </Button>
        <Button
          variant="outlined"
          className="w-full max-w-[10vw]"
          style={{
            backgroundColor: "#FAFAFA",
            color: "#171717",
            fontSize: "0.8vw",
            fontWeight: "bold",
            //   padding: "0.5vw 1vw",
            // borderRadius: "10px",
            border: "1px solid #E5E5E5",
            boxShadow: "0px 0px 0px 1px #171717",
          }}
        >
          <div className="ml-[-1vw]">
            <Image src={"/img/facebook.png"} height={15} width={15} />
          </div>
          <div className="pl-[1vw]">
            <p>Facebook</p>
          </div>
        </Button>
      </div>
    </main>
  );
};

export default page;
