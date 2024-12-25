
import Image from "next/image"
import easier from "../../../public/easier2.png";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import pan from "../../../public/pan.svg";
import pann from "../../../public/pann.svg";

const Hero = () => {
  return (
    <div className="md:min-w-full font-satoshi min-h-[120vh] bg-cover bg-no-repeat bg-center relative bg-[url('/herobg.svg')] hero max-w-[349px] flex flex-col gap-[54px] items-center mx-auto md:mx-0 z-50 2xl:px-[90px] px-[30px] ">
        
        <h1 className="text-[54px]/[65px] font-satoshi mx-auto text-white pt-[150px] md:text-[132px]/[113px] z-50 max-w-[1047px] text-center font-bold  tracking-[-5px] flex flex-col md:items-start justify-center items-center md:justify-start relative ">
              Eating Healthy has never been <br />Easier 
        </h1>
        <p className="text-[20px]/[27px] text-white relative z-[50] max-w-[656px] font-normal mx-auto">Discover smarter meal planning with personalized recommendations, seamless restaurant options, and tools to make healthy living effortless.</p>
        <Link href="/auth/signup">
            <button className="cursor-pointer text-[16px]/[120%] font-normal bg-[#9C8BF9] text-primary-bg w-[140px] py-[16px] px-[20px] rounded-[49px]">
              Join Konsume
            </button>
          </Link>
          
      </div>
  )
}

export default Hero