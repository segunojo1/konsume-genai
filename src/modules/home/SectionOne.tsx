import Image from "next/image";
import { mealCards } from "./cards";
import { Scribble2 } from "./Scribble";

const SectionOne = () => {
  return (
    <section className="font-satoshi relative text-[90px]/[120%] mt-56 font-bold lg:px-[90px] z-[50] ">
        <h2 className="max-w-fit h-fit max-h-[228px] mb-[101px] text-secondary-1000 ">
          <span className="servup h-fit flex flex-col">Serve Up Your </span>
          <span className="servup">Healthy Journey</span>
        </h2>

        <div key="servup" className="flex min-h-[150%] mt-12 w-fit mx-auto ">
          {
            mealCards.map(card => <FeatureCard key={card.rotate} {...card} /> )
          }
        </div>
          <Scribble2 />
      </section>
  )
}

export default SectionOne
type colors = {
  bgcolor: string;
  textcolor: string;
}
type FeatureCardProps = {
  top: number
  rotate: number;
  cardimg: string;
  cardsticker: string;
  cardtitle: string;
  carddesc: string;
  colors: colors;
  captionbg?: string;
}
const FeatureCard = ({top, rotate, cardimg, cardsticker, cardtitle, carddesc, colors, captionbg} : FeatureCardProps) => {
  return (
    <figure className={`p-6 mt-[${top}px] min-h-[389px] bg-secondary-300 w-fit max-w-[290px] space-y-5 rounded-[21px] rotate-[${rotate}deg]`} style={{ transform: `rotate(${rotate}deg)`, backgroundColor: `${colors.bgcolor}`, color: colors.textcolor, marginTop: `${top}px` }}>
      <div className="relative">
      <Image src={cardimg} width={206} height={199} alt="Feature card" className=" mx-auto"/>
      <Image src={cardsticker} width={57} height={57} alt="konsume sticker" className="absolute -top-3 right-0 rotate-6" />
      </div>
      <figcaption className="space-y-[11px] relative ">
        {captionbg && <Image src={captionbg} width={225} height={125} alt="Feature card" className="absolute z-0 mx-auto left-0 right-0" />}
        <h3 className="text-[21px]/[120%] font-bold relative z-40">{cardtitle}</h3>
        <p className="text-[14px]/[120%] font-medium relative z-40">{carddesc}</p>
      </figcaption>
    </figure>
  );
}