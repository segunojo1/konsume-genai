import Image from "next/image";
import { mealCards } from "./cards";

const SectionOne = () => {
  return (
    <section className="font-satoshi text-[90px]/[120%] mt-56 font-bold lg:px-[90px] ">
        <h2 className="max-w-fit h-fit max-h-[228px] mb-[101px] ">
          <span className="servup h-fit flex flex-col">Serve Up Your </span>
          <span className="servup">Healthy Journey</span>
        </h2>

        <div className="flex p-12">
          {
            mealCards.map(card => <FeatureCard {...card} /> )
          }
          
        </div>
      </section>
  )
}

export default SectionOne
type colors = {
  bgcolor: string;
  textcolor: string;
}
type FeatureCardProps = {
  rotate: number;
  cardimg: string;
  cardsticker: string;
  cardtitle: string;
  carddesc: string;
  colors: colors;
}
const FeatureCard = ({rotate, cardimg, cardsticker, cardtitle, carddesc, colors} : FeatureCardProps) => {
  return (
    <figure className={`p-6 bg-secondary-300 w-fit max-w-[290px] space-y-5 rounded-[21px] rotate-[${rotate}deg]`} style={{ transform: `rotate(${rotate}deg)`, backgroundColor: `${colors.bgcolor}`, color: colors.textcolor }}>
      <div className="relative">
      <Image src={cardimg} width={206} height={199} alt="Feature card" className=" mx-auto"/>
      <Image src={cardsticker} width={57} height={57} alt="konsume sticker" className="absolute -top-3 right-0 rotate-6" />
      </div>
      <figcaption className="space-y-[11px] relative ">
      <Image src="/vector1.svg" width={220} height={205} alt="Feature card" className="absolute z-0 left-0 right-0" />
        <h3 className="text-[21px]/[120%] font-bold relative z-40">{cardtitle}</h3>
        <p className="text-[14px]/[120%] font-medium relative z-40">{carddesc}</p>
      </figcaption>
    </figure>
  );
}