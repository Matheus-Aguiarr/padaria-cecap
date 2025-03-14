import { useNavigate } from "react-router-dom";
import "./MenuWay.css";
import ItemPreview from "../ItemPreview/ItemPreview";
import parmegianaImg from "../../assets/parmegiana.jpg";
const MenuWay = () => {
  const navigate = useNavigate();

  function onSeeMenuClick() {
    navigate("/menu");
  }
  return (
    <section id="menu" className="menu">
      <h2 className="text-center font-bold text-3xl overflow-y-hidden">
        Nosso <span className="text-[#126091]">Cardápio</span>
      </h2>

      <div className="menu-preview bg-[#126091] rounded-3xl flex flex-col gap-4">
        <ItemPreview img={parmegianaImg} name="Bife a parmegiana" />
        <ItemPreview img={parmegianaImg} name="Bife a parmegiana" />
        <ItemPreview img={parmegianaImg} name="Bife a parmegiana" />
      </div>

      <div
        className="menu-way overflow-y-hidden h-[70px]"
        onClick={onSeeMenuClick}
      >
        <a className="more bg-[#113891] text-white rounded-full text-center hover:bg-[#f3f3f3] hover:text-[#113891] hover:border-[#126091] font-bold duration-500 text-[20px]">
          Confira o <span className="">Cardápio Completo</span>
        </a>
      </div>
    </section>
  );
};

export default MenuWay;
