import { motion } from "framer-motion";


export const features = [
  {
    div: (
      <div className="feature px-[27px] bg-cover bg-no-repeat bg-center" style={{ backgroundColor: "lightblue", backgroundImage: "url('/features11.svg')", color: "black" }}>
        <h2 className="text-[#1C0D5F] text-[40px]/[120%] font-bold">Personalized Meal <br /> Timetables</h2>
      </div>
    ),
    value: "Personalized Meal Timetables",
  },
  {
    div: (
      <div className="feature px-[27px] bg-cover bg-no-repeat bg-center" style={{ backgroundColor: "lightgreen", backgroundImage: "url('/features2.svg')", color: "black" }}>
        <h2 className="text-[#1C0D5F] text-[40px]/[120%] font-bold">Extensive Meal <br /> Library</h2>
      </div>
    ),
    value: "Extensive Meal Library",
  },
  {
    div: (
      <div className="flex flex-col justify-between h-[500px] text-start items-start rounded-[36px] pt-[66px] pb-[37px] bg-cover bg-no-repeat bg-center" style={{ backgroundColor: "lightcoral", backgroundImage: "url('/features3.svg')", color: "black" }}>
        <h2 className="text-[#1C0D5F] text-[40px]/[120%] font-bold px-[27px] jusse">Nutrition-Based <br /> Blogs</h2>
        <div className="flex gap-4 items-center self-end">
          <motion.div drag
  dragTransition={{ power: 0.1 }}   transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}>
          <img src="/mealcard1.svg" alt="image" width={285} height={235} />
          </motion.div>
          <motion.div drag
  dragTransition={{ power: 0.1 }}   transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}>
          <img src="/mealcard2.svg" alt="image" width={285} height={235} />
          </motion.div>
          <motion.div drag
  dragTransition={{ power: 0.1 }}   transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}>
          <img src="/mealcard3.svg" alt="image" width={285} height={235} />
          </motion.div>
          <motion.div drag
  dragTransition={{ power: 0.1 }}   transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}>
          <img src="/mealcard4.svg" alt="image" width={285} height={235} />
          </motion.div>
        </div>
      </div>
    ),
    value: "Nutrition-Based Blogs",
  },
  {
    div: (
      <div className="feature px-[27px] bg-cover bg-no-repeat bg-center" style={{ backgroundColor: "lightgreen", backgroundImage: "url('/features4.svg')", color: "black" }}>
        <h2 className="text-[#1C0D5F] text-[40px]/[120%] font-bold">Multiple Language <br /> Support</h2>
      </div>
    ),
    value: "Multiple Language Support",
  },
  {
    div: (
      <div className="flex items-center justify-end text-start rounded-[30px] h-[500px] px-[27px] bg-cover bg-no-repeat bg-center" style={{ backgroundColor: "lightgray", backgroundImage: "url('/features55.svg')", color: "black" }}>
        <h2 className="text-[#1C0D5F] text-[40px]/[120%] font-bold">Personalized AI Chatbot <br /> and Meal Scanner</h2>
      </div>
    ),
    value: "Leisure Complexes",
  },
];
