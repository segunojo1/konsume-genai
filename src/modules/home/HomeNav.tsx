import React, { useEffect, useRef, useState } from "react";
import kons from "../../../public/konsume_purple_logo.svg";
import ham from "../../../public/assets/hamburger.png";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const HomeNav = () => {
  const [toggled, setToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const route = useRouter();
  const navClick = () => {
    console.log(toggled);

    setToggled((prev) => !prev);
  };
  const goRestaurant = () => {
    console.log("restaurant");

    route.push("/restaurant");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const selectTriggerRef = useRef<any>(null);

  const [open, setOpen] = useState(false);
  let hoverTimeout: any;
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any pending timeouts
    setOpen(true);  // Open the dropdown on hover
  };

  // const handleMouseLeave = () => {
  //   hoverTimeout = setTimeout(() => {
  //     setOpen(false);
  //   }, 200);
  // };
  return (
    <nav
      className={`font-satoshi fixed w-full max-w-5xl mx-auto left-0 right-0 flex items-center justify-between mb-[232px] 2xl:px-[90px] md:px-[30px] px-[19px] z-[99999] transition-all duration-300 ${isScrolled ? "pt-[20px] " : "pt-[51px]"
        }`}
    >
      <div className="flex items-center gap-[13px] mr-14">
        <Image src={kons} alt="logo" className=" z-[1] " />
      </div>
      {/* <iframe
        src="https://lottie.host/embed/0322d473-f9f4-4a72-b20b-042d823c5775/RfP87MEfHL.json"
        className="absolute z-50"
      ></iframe> */}
      <div
        className={`flex  items-center md:justify-between gap-6  w-fit h-full md:relative md:flex-row flex-col ${toggled ? "left-0" : "left-[-200px]"
          } ${isScrolled ? "shadow-md" : ""} md:left-0 transition-all bottom-0 absolute  md:rounded-[42px] md:p-0 py-9 z-[99] md:bg-white bg-primarygtext`}
      >
        <ul className="flex items-center text-[16px]/[120%] font-normal gap-6 py-[15px] px-[25px] w-full md:flex-row md:text-base-black text-[white] flex-col h-1/3">
          <li className="hover:animate-pulse  hover:border-2 border-[#8C77EC] border-dashed">
            <a href="#magic">Magic</a>
          </li>
          <li className="hover:animate-pulse  hover:border-2 border-[#8C77EC] border-dashed">
            <a href="#features">Features</a>
          </li>
          <li className="hover:animate-pulse  hover:border-2 border-[#8C77EC] border-dashed">
            <a href="#magic">Coolness</a>
          </li>
          <li className="hover:animate-pulse  hover:border-2 border-[#8C77EC] border-dashed">
            <a href="#faqs">FAQs</a>
          </li>
          <li className="hover:animate-pulse  hover:border-2 border-[#8C77EC] border-dashed">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-[6px] md:hidden ">
          <Link href="/auth/signup">
            <button className="cursor-pointer text-[16px]/[120%] font-normal bg-[#9C8BF9] text-primary-bg w-[123px] py-[10px] rounded-[49px] md:m-0 mb-[30px] mt-16">
              Join Us
            </button>
          </Link>
        </div>
      </div>
      <div className={`hidden md:flex items-center gap-[6px]`}>
        <div onMouseEnter={handleMouseEnter}>
          <Select value="Personal" onOpenChange={setOpen} open={open} onValueChange={goRestaurant} >
            <SelectTrigger className={`${isScrolled ? "shadow-md" : ""}  text-[16px]/[120%] font-normal bg-color8-100 text-primarygtext py-[15px] h-full pl-[30px] pr-[15px] flex gap-3 rounded-[42px]`}>
              <SelectValue placeholder="Personal" />
              {/* <Image src={down} alt="down" width={25} height={25} /> */}
            </SelectTrigger>
            <SelectContent className="bg-[transparent] gap-2 flex flex-col shadow-none">
              <SelectItem
                value="Personal"
                className="rounded-3xl bg-[white] w-fit pr-8 mb-1"
              >
                <Link href="/">Personal</Link>
              </SelectItem>
              <SelectItem
                value="restaurant"
                className="rounded-3xl bg-[white] w-fit pr-8"
              >
                <Link href="/restaurant" >
                  Restaurant
                </Link>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link href="/auth/signup" className={`${isScrolled ? "shadow-md" : ""} h-full cursor-pointer text-[16px]/[120%] flex justify-center min-h-full font-normal bg-[#9C8BF9] text-primary-bg w-[150px] text-center py-[15px] px-[30px] rounded-[49px] md:m-0 mb-[30px]`}>
            Join Us
        </Link>
      </div>
      <Image
        src={ham}
        alt="hamburger"
        className="md:hidden block z-[100]"
        onClick={navClick}
      />
    </nav>
  );
};

export default HomeNav;
