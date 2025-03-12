import "./Testimonials.css";
import { TiStarFullOutline } from "react-icons/ti";

const Testimonials = ({ userImg, userName, userText }) => {
  return (
    <div className="testimonial w-[300px] min-h-[300px] bg-[white] rounded-xl flex flex-col gap-[10px]">
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
    </div>
  );
};

export default Testimonials;
