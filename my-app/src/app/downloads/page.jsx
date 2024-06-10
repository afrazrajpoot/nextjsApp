import React from "react";
import Button from "@mui/material/Button"; // Import MUI Button
import Sidebar from "../components/Common/Sidebar/Sidebar";

const page = () => {
  const downloadData = [
    {
      img: "/img/img.png",
      desc: "1500+ Transitions Premiere Pro",
    },
    {
      img: "/img/img (1).png",
      desc: "1500+ Transitions Premiere Pro",
    },
    {
      img: "/img/img (2).png",
      desc: "1500+ Transitions Premiere Pro",
    },
  ];
  return (
    <main className="bg-[#FAFAFA] h-[110vh]">
      <Sidebar />
      <section className="rounded-md w-full md:max-w-[50vw] max-w-[90vw] translate-y-[5vw] md:translate-x-[26vw] translate-x-[5vw]">
        <h1 className="font-bold text-[6vw] md:text-[2vw] md:ml-[0vw] ml-[5vw] translate-y-[13vw] md:translate-y-[0.5vw] translate-x-[-4vw] md:translate-x-0">
          Downloads
        </h1>
        <div
          className="p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
          md:translate-y-0 rounded-lg"
        >
          <div className="flex gap-[1vw]">
            {downloadData?.map((elem, ind) => (
              <div key={ind} className="flex flex-col">
                <img src={elem.img} alt="" />
                <p>{elem.desc}</p>
                <Button
                  variant="outlined"
                  sx={{
                    py: "0.4vw",
                    px: "1vw",
                    width: "100%",
                    mt: "1vw",
                    color: "#FF387A",
                    borderColor: "#FF387A",
                    borderRadius: "0.5vw",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderColor: "#FF387A",
                    },
                  }}
                >
                  View All
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
