import Footer from "@/components/Footer";

import { termAndConditionData } from "@/data/data";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="md:translate-y-[8vw] translate-y-[25vw]  md:pb-[15vw] pb-[30vw]">
        <h1 className="md:text-[2vw] text-[6vw] font-bold text-center">
          Terms & Conditions
        </h1>
        <p className="text-center mt-[0.6vw] md:text-[1vw] text-[3vw]">
          Effective Date: November 28, 2023
        </p>
        <article className=" w-full max-w-[90vw] ml-[]  mt-[6vw] flex flex-col gap-[3vw] md:gap-[1vw] px-[9vw]">
          {termAndConditionData?.map((section, index) => (
            <div
              key={index}
              className="w-full max-w-[70vw] flex flex-col gap-[0.3vw] "
            >
              <h2 className="md:font-bold font-medium">{section.title}</h2>
              <p className="md:text-[1vw] text-[4vw]  w-[85vw]">
                {section.desc}
              </p>
            </div>
          ))}
          <p className=" md:text-[1vw] text-[3.5vw]">
            Contact Us. If you have any questions about these Terms, please
            contact us.
          </p>
        </article>
      </section>
      <footer className="translate-y-[2vw]">
        <Footer />
      </footer>
    </main>
  );
};

export default page;
