import "./Feedback.css";
import { TiStarFullOutline } from "react-icons/ti";
import userImg from "../../assets/profile-img.jpg";

const Feedback = () => {
  return (
    <section
      id="feedback"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-center font-bold text-3xl overflow-y-hidden">
        O que nossos clientes dizem{" "}
        <span className="text-[#113891]">sobre nós?</span>
      </h2>
      <div className="testimonials flex flex-row gap-6 rounded-3xl">
        <div className="testimonial01 w-[300px] bg-[white] rounded-xl flex flex-col justify-center gap-[10px]">
          <div className="stars flex flex-row">
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
          </div>
          <div className="paragraph">
            <p>
              “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              labore praesentium quae, non hic magnam aliquam nihil odit quidem
              deleniti dolore natus possimus? Delectus ipsam dolorem, ducimus
              neque commodi veniam?”
            </p>
          </div>
          <div className="author flex flex-row items-center gap-2">
            <img src={userImg} alt="" className="w-[50px] rounded-[50%]" />
            <p className="font-semibold">João da Silva</p>
          </div>
        </div>
        <div className="testimonial02 w-[300px] bg-[white] rounded-xl flex flex-col justify-center gap-[10px]">
          <div className="stars flex flex-row">
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
          </div>
          <div className="paragraph">
            <p>
              “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              labore praesentium quae, non hic magnam aliquam nihil odit quidem
              deleniti dolore natus possimus? Delectus ipsam dolorem, ducimus
              neque commodi veniam?”
            </p>
          </div>
          <div className="author flex flex-row items-center gap-2">
            <img src={userImg} alt="" className="w-[50px] rounded-[50%]" />
            <p className="font-semibold">Maria das Dores</p>
          </div>
        </div>
        <div className="testimonial03 w-[300px] bg-[white] rounded-xl flex flex-col justify-center gap-[10px]">
          <div className="stars flex flex-row">
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
            <TiStarFullOutline className="text-[#126091]" size={25} />
          </div>
          <div className="paragraph">
            <p>
              “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              labore praesentium quae, non hic magnam aliquam nihil odit quidem
              deleniti dolore natus possimus? Delectus ipsam dolorem, ducimus
              neque commodi veniam?”
            </p>
          </div>
          <div className="author flex flex-row items-center gap-2">
            <img src={userImg} alt="" className="w-[50px] rounded-[50%]" />
            <p className="font-semibold">Marcos Rocha</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
