import Header from "../components/header/Header.jsx";
import Itens from "../components/Itens/Itens.jsx";
import NavMenu from "./navMenu/navMenu.jsx";
import cardapio1 from "../assets/imgsCardapio/folhas1.png";
import cardapio2 from "../assets/imgsCardapio/folhas2.png";
import cardapio3 from "../assets/imgsCardapio/folhas3.png";
import cardapio4 from "../assets/imgsCardapio/folhas4.png";
import cardapio5 from "../assets/imgsCardapio/folhas5.png";
import cardapio6 from "../assets/imgsCardapio/folhas6.png";
import cardapio7 from "../assets/imgsCardapio/folhas7.png";
import cardapio8 from "../assets/imgsCardapio/folhas8.png";
import cardapio9 from "../assets/imgsCardapio/folhas9.png";
import cardapio10 from "../assets/imgsCardapio/folhas10.png";
import cardapio11 from "../assets/imgsCardapio/folhas11.png";
import cardapio12 from "../assets/imgsCardapio/folhas12.png";
import cardapio13 from "../assets/imgsCardapio/folhas13.png";
import cardapio14 from "../assets/imgsCardapio/folhas14.png";

import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <Header />
      <NavMenu />
      <div className="imagens flex flex-col gap-3">
        <Itens name={cardapio1} sessao={"matinais"} />
        <Itens name={cardapio2} sessao={"salgados"} />
        <Itens name={cardapio3} sessao={"sanduiches"} />
        <Itens name={cardapio4} sessao={"lanches"} />
        <Itens name={cardapio5} />
        <Itens name={cardapio6} sessao={"refeicoes"} />
        <Itens name={cardapio7} />
        <Itens name={cardapio8} />
        <Itens name={cardapio9} sessao={"porcoes"} />
        <Itens name={cardapio10} sessao={"bebidas"} />
        <Itens name={cardapio11} />
        <Itens name={cardapio12} />
        <Itens name={cardapio13} />
        <Itens name={cardapio14} sessao={"massas"} />
      </div>
    </div>
  );
};

export default Menu;
