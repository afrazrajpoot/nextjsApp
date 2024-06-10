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
    <main className="bg-[#FAFAFA] h-[140vh]">
      <section className="translate-y-[5vw] pb-[4vw]">
        <article className="w-full max-w-[80vw] m-auto">
          <button className="border-[1px] border-[#FF689A] bg-[#ff689a34] p-[0.6vw] rounded-md text-[#FF689A] mt-[1vw]">
            Tutorials
          </button>
          <h1 className="text-[2vw] font-bold mt-[1vw]">
            Frequently Asked Questions
          </h1>
          <p className="mt-[1vw]">
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
                <Typography className="text-[1vw] p-[0.8vw] font-bold">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="flex items-start gap-[1vw]">
                <img src={item.img} alt={item.title} className="" />
                <Typography className="text-[1vw]">{item.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </article>
        <article className="mt-[9vw]">
          <h1 className="font-bold text-[2vw] text-center">What they say</h1>
          <p className="text-center w-full max-w-[27vw] m-auto text-[#525252] font-medium mt-[1vw]">
            Hear from our satisfied clients and learn how we've helped them take
            their businesses to new heights.
          </p>
          <figure className="flex justify-center mt-[2vw]">
            <img src="/img/brands.png" alt="brands images" />
          </figure>
          <main className="flex w-full max-w-[65vw] m-auto gap-[3vw]">
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
                  <p className="text-[0.8vw] mt-[1vw] font-medium">
                    {item.desc}
                  </p>
                </header>
                <figure className="border-[1px] border-[#F5F5F5] p-[0.1vw] rounded-full w-full max-w-[3vw] gap-[0.3vw]  flex">
                  <img src={item.icon} alt="" />{" "}
                  <span className="text-[0.8vw]">5.0</span>
                </figure>
                <figure className="flex gap-[1vw]">
                  <img src={item.avatar} alt={item.name} className="" />
                  <div>
                    <p className="text-[1vw] font-bold">{item.name}</p>
                    <p className="text-[1vw]">{item.brandName}</p>
                  </div>
                </figure>
              </main>
            ))}
          </main>
        </article>
      </section>
      <footer className="translate-y-[10vw]">
        <Footer />
      </footer>
    </main>
  );
}
