import BillingForm from "@/components/BillingForm";
import Sidebar from "@/components/Sidebar";
import { menueData, otherData } from "@/data/data";

import React from "react";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] h-[110vh]">
      <Sidebar />

      <section className=" rounded-md w-full md:max-w-[50vw] max-w-[90vw] translate-y-[5vw] md:translate-x-[26vw] translate-x-[5vw]">
        <h1 className="font-bold text-[6vw] md:text-[2vw] md:ml-[0vw] ml-[5vw] translate-y-[13vw] md:translate-y-[0.5vw] translate-x-[-4vw]  md:translate-x-0">
          Billing Address
        </h1>
        <div
          className=" p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
        md:translate-y-0 rounded-lg"
        >
          <BillingForm />
        </div>
      </section>
    </main>
  );
};

export default page;
