import "./Feedback.css";
import userImg from "../../assets/profile-img.jpg";
import Testimonials from "../Testimonials/Testimonials";

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
        <Testimonials
          userText={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum labore praesentium quae, non hic magnam aliquam nihil odit quidem deleniti dolore natus possimus? Delectus ipsam dolorem, ducimus neque commodi veniam?"
          }
          userImg={userImg}
          userName={"João Dias"}
        />
        <Testimonials
          userText={"Lorem ipsum dolor, sit amet consectetur adipisicing"}
          userImg={userImg}
          userName={"Maria Silva"}
        />
        <Testimonials
          userText={
            "lorem ipsum dolor, sit amet consectetur adipsing jamsint chonpend barakit"
          }
          userImg={userImg}
          userName={"José Carlos"}
        />
      </div>
    </section>
  );
};

export default Feedback;
