"use client"

import Image from "next/image";
import React, { useRef } from "react";
import pan from "../../../public/pan.svg";
import pann from "../../../public/pann.svg";
import plate from "../../../public/konsumeplate.svg";
import Hero from "./Hero";
import SectionFour from "./SectionFour";
import Link from "next/link";
import FAQs from "./FAQs";
import Footer from "./Footer";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeBody = () => {
  const scrollRef = useRef(null); // Ref for scroll animation
  const panRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"], // When the section comes into view
  });

  return (
    <main className="flex  flex-col font-satoshi">
      <div className="flex  flex-col" ref={scrollRef}>
        <Hero />
        <motion.div ref={panRef} className=" hidden -top-[40%] md:block  z-0" style={{ position: "sticky", top: 0 }}>
          <motion.div className="absolute  right-0 -top-[55vh]" style={{ top: useTransform(scrollYProgress, [0, 0.4], [-900, 60]), right: useTransform(scrollYProgress, [0.2, 0.7], [0, 400]), rotate: useTransform(scrollYProgress, [0.2, 0.7], [0, 60]) }}>
            <Image
              src={pan}
              alt="easier"
              className=""
              width={858}
              height={869}
            />
          </motion.div>
        </motion.div>
        <SectionOne />
        <SectionTwo />
        {/* <SectionThree /> */}
        <div className="flex pt-[98.06px] flex-col items-center ">
          <h1 className="text-[42.88px]/[51.46px] font-bold">
            Konsume in Action!
          </h1>
          <p className="text-[22.51px]/[27.01px] text-primarytext">
            Every Bite, Powered by AI
          </p>
          <Image src={plate} alt="plate" className="" width={162} height={162} />
        </div>
        {/* <SectionFour /> */}
        <div className="pt-[34px] pb-[129px] flex  bg-primary-bg">
          <Link
            href="/auth/signup"
            className=" mx-auto text-[19px] font-bold rounded-[40px] bg-primarygtext text-primary-bg px-[25px] py-[10px]"
          >
            Join Us
          </Link>
        </div>
        <FAQs />
      </div>
      <div className="bg-primary-bg">
        <footer style={{ position: "sticky", top: 0 }} className="">
          <div className=" lg:text-[230px]/[240px]">
            <h1>S</h1>
          </div>
          <div className="flex items-center flex-col gap-5 ">
            <h2 className="">LET&apos;S CONNECT</h2>
          </div>
        </footer>
        <Footer />
      </div>

      <Image
        src={pann}
        alt="easier"
        className="absolute block my-auto top-0 bottom-0 md:hidden right-0 left-0 mx-auto z-0 "
        width={237}
        height={237}
      />
    </main>
  );
};

export default HomeBody;
