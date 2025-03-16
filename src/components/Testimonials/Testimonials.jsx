import "./Testimonials.css";
import { TiStarFullOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const Testimonials = ({ userImg, userName, userText }) => {
  return (
    <motion.div
      className="testimonial w-[300px] min-h-[300px] bg-[white] rounded-xl flex flex-col gap-[10px]"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="stars flex flex-row">
        <TiStarFullOutline className="text-[#126091]" size={25} />
        <TiStarFullOutline className="text-[#126091]" size={25} />
        <TiStarFullOutline className="text-[#126091]" size={25} />
        <TiStarFullOutline className="text-[#126091]" size={25} />
        <TiStarFullOutline className="text-[#126091]" size={25} />
      </div>
      <div className="paragraph">
        <p>“{userText}”</p>
      </div>
      <div className="author flex flex-row items-center gap-2">
        <img src={userImg} alt="" className="w-[50px] rounded-[50%]" />
        <p className="font-semibold">{userName}</p>
      </div>
    </motion.div>
  );
};

export default Testimonials;
