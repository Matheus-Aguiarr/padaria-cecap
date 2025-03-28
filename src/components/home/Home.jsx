import "./Home.css";
import React from "react";
import imgHome from "../../assets/img-home.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

const Home = () => {
  return (
    <section className="w-[100vw] flex items-center justify-center" id="home">
      <div className="home-section">
        <div className="texts">
          <h1 className="font-bold text-4xl">
            Pão quentinho é na{" "}
            <span className="text-[#126091]">Panificadora Cecap</span>
          </h1>
          <p className="text-center mt-4 ">
            A Panificadora Cecap é a melhor opção para quem procura pães
            fresquinhos e saborosos. Venha nos visitar e experimente o melhor
            pão da região.
          </p>
          <div className="links flex justify-center mt-10 gap-8">
            <a
              href="https://wa.me/5511963398711?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Panificadora%20Parque%20Cecap"
              target="_blank"
            >
              <FaWhatsapp
                size={40}
                className="text-[#113891] whatsapp-link duration-500"
              />
            </a>
            <a
              href="tel:+551124087075"
              className="text-[#113891] bg-[#c8eaff] font-semibold rounded-md flex items-center border-2 border-[#113891] duration-500 hover:bg-[#113891] hover:text-[#c8eaff] px-4 py-2 "
            >
              <CiPhone size={40} /> (11) 2408-7075
            </a>
          </div>
        </div>
        <img src={imgHome} alt="" className="w-[350px] rounded-2xl " />
      </div>
    </section>
  );
};

export default Home;
