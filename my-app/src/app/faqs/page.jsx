"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { faqCardData, faqData } from "@/data/data";

import Footer from "@/components/Footer";

export default function DisabledAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <main className="bg-[#FAFAFA] md:h-[140vh] h-[198vw] xr:h-[85vh] 2xr:h-[85vh]">
      <section className="md:translate-y-[5vw] translate-y-[18vw] pb-[4vw]">
        <article className="w-full max-w-[80vw] m-auto">
          <button className="border-[1px] border-[#FF689A] bg-[#ff689a34] p-[0.6vw] rounded-md text-[#FF689A] md:mt-[1vw] md:text-[1vw] text-[3vw]">
            Tutorials
          </button>
          <h1 className="md:text-[2vw] text-[5vw] font-bold mt-[1vw] ">
            Frequently Asked Questions
          </h1>
          <p className="mt-[1vw] md:text-[1vw] text-[3vw]">
            We understand that you may have some questions about sunduckfilm. We
            have compiled a list of frequently asked questions to help you get
            the information you need. If you have any other questions, please do
            not hesitate to contact us.
          </p>
        </article>
        <article className="w-full max-w-[80vw] m-auto flex flex-col gap-[2vw] mt-[2vw]">
          {faqData?.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className="rounded-lg"
            >
              <AccordionSummary
                expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography className="md:text-[1vw] text-[3vw] p-[0.8vw] font-bold">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="flex md:flex-row  flex-col items-start gap-[1vw]">
                <img src={item.img} alt={item.title} className="" />
                <Typography className="md:text-[1vw] text-[3vw]">
                  {item.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </article>
        <article className="md:mt-[9vw] mt-[20vw]">
          <h1 className="font-bold md:text-[2vw] text-[6vw] text-center">
            What they say
          </h1>
          <p className="text-center md:w-[27vw] w-[99vw] m-auto text-[#525252] font-medium mt-[1vw]">
            Hear from our satisfied clients and learn how we've helped them take
            their businesses to new heights.
          </p>
          <figure className="flex justify-center mt-[2vw]">
            <img src="/img/brands.png" alt="brands images" />
          </figure>
          <main className="flex md:flex-row flex-col w-full max-w-[65vw] m-auto md:gap-[3vw] gap-[8vw]">
            {faqCardData?.map((item, index) => (
              <main
                key={index}
                className={`flex flex-col gap-[1.4vw] ${
                  index === 1 &&
                  "border-[1px] border-[#F5F5F5] rounded-md p-[0.6vw]"
                } `}
              >
                <header className="">
                  <img src={item.img} alt={item.name} className="" />
                  <p className="md:text-[0.8vw] text-[3vw] mt-[1vw] font-medium">
                    {item.desc}
                  </p>
                </header>
                <figure className="border-[1px] border-[#F5F5F5] p-[0.1vw] mt-[6vw] rounded-full w-[10.5vw] md:w-[3vw] gap-[0.3vw]  flex">
                  <img src={item.icon} alt="icon" />{" "}
                  <span className="md:text-[0.8vw] text-[3vw]">5.0</span>
                </figure>
                <figure className="flex gap-[1vw] mt-[6vw] md:mt-[0vw]">
                  <img src={item.avatar} alt={item.name} className="" />
                  <div>
                    <p className="md:text-[1vw] text-[3vw] font-bold">
                      {item.name}
                    </p>
                    <p className="md:text-[1vw] text-[3vw]">{item.brandName}</p>
                  </div>
                </figure>
              </main>
            ))}
          </main>
        </article>
      </section>
      <footer className="md:translate-y-[10vw] translate-y-[25vw]">
        <Footer />
      </footer>
    </main>
  );
}
