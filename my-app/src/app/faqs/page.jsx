"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { faqCardData, faqData } from "@/data/data";
import Footer from "../components/Common/Footer/Footer";

export default function DisabledAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <main className="bg-[#FAFAFA]">
      <section className="lg:translate-y-[5vw] translate-y-[18vw] sm:translate-y-[8.5vw] pb-[4vw]">
        <article className="w-full max-w-[80vw] m-auto">
          <button className="border-[1px] border-[#FF689A] sm:text-[1.5vw] bg-[#ff689a34] p-[0.6vw] rounded-lg text-[#FF689A] lg:mt-[1vw] lg:text-[1vw] text-[3vw]">
            Tutorials
          </button>
          <h1 className="lg:text-[2vw] text-[5vw] font-bold mt-[1vw]  sm:text-[3vw]">
            Frequently Asked Questions
          </h1>
          <p className="mt-[1vw] lg:text-[1vw] text-[3vw] sm:text-[2vw]">
            We understand that you may have some questions about sunduckfilm. We
            have compiled a list of frequently asked questions to help you get
            the information you need. If you have any other questions, please do
            not hesitate to contact us.
          </p>
        </article>
        <article className="w-full max-w-[80vw] m-auto flex flex-col gap-[2vw] mt-[2vw] ">
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
                <Typography className="lg:text-[1vw] text-[3vw] p-[0.8vw] sm:text-[2vw] font-bold">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="flex lg:flex-row  flex-col items-start gap-[1vw]">
                <img src={item.img} alt={item.title} className="" />
                <Typography className="lg:text-[1vw] text-[3vw]">
                  {item.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </article>
        <article className="lg:mt-[9vw] mt-[20vw] sm:mt-[5vw] bg-white sm:pb-[8vw] lg:pb-[6vw] pt-[2vw]">
          <h1 className="font-bold lg:text-[2vw] text-[6vw] text-center sm:text-[3vw]">
            What they say
          </h1>
          <p className="text-center lg:w-[27vw] w-[99vw] m-auto text-[#525252] font-medium mt-[1vw] sm:w-[50vw]">
            Hear from our satisfied clients and learn how we've helped them take
            their businesses to new heights.
          </p>
          <figure className="flex justify-center mt-[2vw]">
            <img src="/img/brands.png" alt="brands images" />
          </figure>
          <main className="flex lg:flex-row flex-col  sm:flex-row w-full max-w-[65vw]   m-auto lg:gap-[3vw] gap-[8vw]">
            {faqCardData?.map((item, index) => (
              <main
                key={index}
                className={`flex flex-col  gap-[1.4vw] lg:gap-[0vw]  sm:gap-[1vw]  ${
                  index === 1 &&
                  "border-[1px] border-[#F5F5F5] rounded-lg p-[0.6vw]"
                } `}
              >
                <header className="">
                  <figure>
                    <img src={item.img} alt={item.name} className="" />
                  </figure>
                  <p className="lg:text-[0.8vw] text-[3vw] mt-[1vw] lg:mt-[1vw] font-medium sm:text-[1.5vw]">
                    {item.desc}
                  </p>
                </header>
                <figure className="border-[1px] border-[#F5F5F5] sm:mt-[1vw] p-[0.1vw] mt-[6vw] lg:mt-[1vw] rounded-full sm:w-[6vw] w-[10.5vw] lg:w-[3vw]   flex ">
                  <img src={item.icon} alt="icon" />{" "}
                  <span className="lg:text-[0.8vw] text-[3vw] sm:text-[1.5vw]">
                    5.0
                  </span>
                </figure>
                <figure className="flex gap-[1vw] mt-[6vw] sm:mt-[1vw] lg:mt-[1vw]">
                  <figure>
                    <img src={item.avatar} alt={item.name} className="" />
                  </figure>
                  <div>
                    <p className="lg:text-[1vw] text-[3vw] sm:text-[1vw] font-bold">
                      {item.name}
                    </p>
                    <p className="lg:text-[1vw] text-[3vw] sm:text-[1vw]">
                      {item.brandName}
                    </p>
                  </div>
                </figure>
              </main>
            ))}
          </main>
        </article>
      </section>
      <footer className="lg:translate-y-[1vw] translate-y-[25vw] sm:translate-y-[5vw] ">
        <Footer />
      </footer>
    </main>
  );
}
