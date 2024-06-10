import Sidebar from "@/components/Sidebar";
import { Button } from "@mui/material";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] h-screen">
      <Sidebar />
      <div className=" w-full max-w-[29vw] ml-[30vw] absolute top-[6vw]  ">
        <h1 className="font-bold text-[1.5vw]">VATE Number</h1>
        <div className="bg-white border-[1px] border-[#F5F5F5] rounded-md p-[1vw] mt-[1vw]">
          <p>VAT Number</p>
          <input
            type="text"
            className="bg-[#FAFAFA] p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5]"
            name=""
            id=""
          />
          <Button
            type="Save changes"
            size="large"
            className="w-full mt-4 text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;
