import Layout from "../layout/Layout";
import { privacyPolicyData, termAndConditionData } from "@/data/data";
import React from "react";

const page = () => {
  return (
    <Layout>
      <main>
        <section className="md:translate-y-[8vw] translate-y-[25vw]  md:pb-[15vw] pb-[30vw]">
          <h1 className="md:text-[2vw] text-[5vw] font-bold text-center">
            Privacy Policy
          </h1>
          <p className="text-center mt-[0.6vw] md:text-[1vw] text-[3vw]">
            Effective Date: November 28, 2023
          </p>
          <article className=" w-full max-w-[90vw] m-auto mt-[6vw] flex flex-col gap-[3vw] md:gap-[1vw] px-[9vw]">
            {privacyPolicyData?.map((section, index) => (
              <div
                key={index}
                className="w-full max-w-[70vw] flex flex-col gap-[0.3vw] "
              >
                <h2 className="md:font-bold font-medium">{section.title}</h2>
                <p className="md:text-[1vw] text-[3vw]">{section.desc}</p>
              </div>
            ))}
            <p className="md:block hidden">
              Contact Us. If you have any questions about these Terms, please
              contact us.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default page;
