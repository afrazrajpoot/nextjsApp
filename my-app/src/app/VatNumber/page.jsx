import Sidebar from "@/components/Sidebar";
import { Button } from "@mui/material";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] h-screen">
      <Sidebar />
      <div className=" w-full md:max-w-[29vw] max-w-[70vw] m-auto md:ml-[30vw] md:translate-y-[6vw] translate-y-[25vw] ">
        <h1 className="font-bold md:text-[1.5vw] text-[4vw]">VATE Number</h1>
        <div className="bg-white border-[1px] border-[#F5F5F5] rounded-md p-[1vw] md:mt-[1vw] mt-[3vw]">
          <p className="md:text-[1vw] md:mt-[0vw] mt-[3vw] text-[4vw]">
            VAT Number
          </p>
          <input
            type="text"
            className="bg-[#FAFAFA] p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5]"
            name=""
            id=""
          />
          <Button
            type="Save changes"
            size="large"
            className="w-full mt-4 text-[2vw] md:text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;
