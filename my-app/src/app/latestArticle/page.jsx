import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { latestArticledata } from "@/data/data";
import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const Page = () => {
  const data = [
    {
      title: "Davinci Resolve",
      desc: "(8)",
    },
    {
      title: "After Effects",
      desc: "(2)",
    },
    {
      title: "Graphic Design",
      desc: "(24)",
    },
    {
      title: "Filmmaking",
      desc: "(12)",
    },
  ];
  return (
    <Layout>
      <main className="bg-[#FAFAFA] pb-[2vw]">
        <section className="translate-y-[5vw] ">
          <section className="w-full max-w-[75vw] m-auto">
            <button className="border-[1px] border-[#FF689A] bg-[#ff689a34] p-[0.6vw] rounded-md text-[#FF689A] mt-[1vw]">
              Tutorials
            </button>
            <h1 className="text-[2vw] font-bold">Latest Articles</h1>
            <p className="mt-[1vw]">
              We understand that you may have some questions about sunduckfilm.
              We have compiled a list of frequently asked questions to help you
              get the information you need. If you have any other questions,
              please do not hesitate to contact us.
            </p>
            <article className="flex mt-[3vw]">
              <section className="">
                <article className="flex flex-col gap-[4vw]">
                  {latestArticledata?.map((item, index) => (
                    <div key={index} className="flex gap-[1vw]">
                      <img src={item.img} alt={item.title} />
                      <div className="mt-[0.8vw]">
                        <h1 className="font-bold text-[1vw] w-full max-w-[18vw] text-[#171717]">
                          {item.title}
                        </h1>
                        <p className="text-[0.9vw] mt-[0.6vw] font-medium text-[#525252]">
                          {item.date}{" "}
                          <span className="text-[#FF689A]">Erin Bator</span>
                        </p>
                        <p className="text-[0.9vw] w-full max-w-[25vw] mt-[0.6vw] text-[#171717]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </article>
              </section>
              <section className="ml-[10vw]">
                <article>
                  <form>
                    <TextField
                      id="outlined-basic"
                      placeholder="Search..."
                      InputProps={{
                        startAdornment: (
                          <Image
                            src={"/img/blackSearch.png"}
                            height={20}
                            width={20}
                            style={{ marginRight: "10px" }}
                            className="md:block hidden"
                            alt="Search Icon"
                          />
                        ),
                        className:
                          "text-[#A3A3A3] bg-[#FAFAFA] p-[0.3vw] focus:outline-none rounded-md placeholder:text-[#A3A3A3] border-[1px] border-[#FAFAFA] w-[20vw]",
                        style: { padding: "0.3vw" },
                      }}
                      sx={{
                        "& input": {
                          padding: "0.3vw",
                        },
                      }}
                    />
                  </form>
                  <h2 className="text-[1.5vw] font-bold mt-[2vw] ml-[0.4vw]">
                    Recent Posts
                  </h2>
                  <div className="mt-[1vw] ml-[0.4vw]">
                    <p className="text-[#525252] text-[1vw]">22/06/2023</p>
                    <p className="text-[1vw] font-medium">
                      The 10 Most Popular Title Animations in After Effects
                    </p>
                  </div>
                  <div className="border-[0.7px] border-b-[#E5E5E5] mt-[1vw]"></div>
                  <div className="mt-[1vw] ml-[0.4vw]">
                    <p className="text-[#525252] text-[1vw]">22/06/2023</p>
                    <p className="text-[1vw] font-medium">
                      Create Cinematic Visuals in After Effects
                    </p>
                  </div>
                  <div className="border-[0.7px] border-b-[#E5E5E5] mt-[1vw]"></div>
                  <div className="mt-[1vw] ml-[0.4vw]">
                    <p className="text-[#525252] text-[1vw]">22/06/2023</p>
                    <p className="text-[1vw] font-medium">Bounce Expression</p>
                  </div>
                  <div className="border-[0.7px] border-b-[#E5E5E5] mt-[1vw]"></div>
                  <h2 className="text-[1.5vw] font-bold mt-[2vw] ml-[0.4vw]">
                    Categories
                  </h2>
                  <div className="border-[0.7px] border-b-[#E5E5E5] mt-[1vw]"></div>
                  {data?.map((elem, ind) => (
                    <div key={ind}>
                      <div className="flex justify-between">
                        <h3 className="mt-[1vw] ml-[0.4vw] text-[1vw] font-medium">
                          {elem.title}
                        </h3>
                        <p className="mt-[1vw] text-[#FF689A]">{elem.desc}</p>
                      </div>
                      <div className="border-[0.7px] border-b-[#E5E5E5] mt-[1vw]"></div>
                    </div>
                  ))}
                </article>
              </section>
            </article>
          </section>
        </section>
        <Pagination />
      </main>
    </Layout>
  );
};

export default Page;
