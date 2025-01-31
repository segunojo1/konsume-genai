"use client"

import Image from "next/image";
import React, { useRef } from "react";
import pan from "../../../public/pan.svg";
import pann from "../../../public/pann.svg";
import frame from "../../../public/framee.png";
import Hero from "./Hero";
import FAQs from "./FAQs";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionThree from "./SectionThree";

const HomeBody = () => {
  const scrollRef = useRef(null); // Ref for scroll animation
  const panRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"], // When the section comes into view
  });

  return (
    <div className="flex  flex-col font-satoshi  " ref={scrollRef}>
      <main className="flex  flex-col " >
        <Hero />
        {/* <motion.div ref={panRef} className=" hidden -top-[40%] md:block  z-0" style={{ position: "sticky", top: 0 }}>
          <motion.div className="absolute  right-0 -top-[55vh]" style={{opacity: useTransform(scrollYProgress, [0.5, 0.8], [1, 0]), top: useTransform(scrollYProgress, [0, 0.4], [-900, 60]), right: useTransform(scrollYProgress, [0.2, 0.7], [0, 400]), rotate: useTransform(scrollYProgress, [0.2, 0.7], [0, 60]) }}>
            <Image
              src={pan}
              alt="pan"
              className="z-[999999999999999] relative"
              width={858}
              height={869}
            />
          </motion.div>
        </motion.div> */}
        <motion.div ref={panRef} className=" block -top-[40%] md:hidden  z-0" style={{ position: "sticky", top: 0 }}>
          <motion.div className="absolute  right-0 top-[80vh]" style={{opacity: useTransform(scrollYProgress, [0.5, 0.8], [1, 0]), top: useTransform(scrollYProgress, [0, 0.4], [-900, 800]), right: useTransform(scrollYProgress, [0.2, 0.7], [0, 100]), rotate: useTransform(scrollYProgress, [0.2, 0.7], [0, 60]) }}>
            <Image
              src={pan}
              alt="pan"
              className=""
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
        {/* <SectionOne /> */}
        {/* <SectionTwo /> */}
        <Image src={frame} alt="frame"/>
        <FAQs />
      </main>
        <Footer />
    </div>
  );
};

export default HomeBody;
