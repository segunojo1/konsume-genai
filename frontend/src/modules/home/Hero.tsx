

import Link from "next/link";
import { Scribble } from "./Scribble";
import { useIsPageLoaded } from "@/hooks/useIsPageLoaded";
import Image from "next/image";
import plate from "../../../public/plate.svg"


const Hero = () => {
  const  {isPageLoaded} = useIsPageLoaded()

  return (
    <div className="md:min-w-full font-satoshi md:min-h-[120vh] min-h-[80vh] bg-cover bg-no-repeat bg-center relative bg-[url('/herobg.svg')] hero  flex flex-col gap-[54px] items-center md:mx-0  2xl:px-[90px] px-[20px] z-[9999] ">
        
        <h1 className="text-[46px]/[100%] font-satoshi mx-auto text-white pt-[133px] md:pt-[150px] md:text-[132px]/[113px] z-50 max-w-[1047px] text-center font-bold  tracking-[-3px] flex flex-col md:items-start justify-center items-center md:justify-start relative ">
              Eating Healthy has never been <br />Easier 
        </h1>
        <p className="md:text-[20px]/[27px] text-[18px]/[27px] text-center text-white relative z-[50] max-w-[656px] font-normal mx-auto">Discover smarter meal planning with personalized recommendations, seamless restaurant options, and tools to make healthy living effortless.</p>
        <Link href="/auth/signup" className="cursor-pointer">
        <button className="cursor-pointer text-[16px]/[120%] flex items-center gap-3 font-normal bg-[#9b8bf9a3] text-primary-bg w-[160px] py-[16px] px-[20px] rounded-[49px]">
              Get a Plate
              <Image src={plate} alt="plate" width={30} height={30}/>
            </button>
          </Link>
          {isPageLoaded ? (
        <Scribble />
      ) : (
        <div>Loading...</div> // Optional loading spinner or fallback
      )}
      </div>
  )
}

export default Hero