import "./NavMenu.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <h1 className="text-[25px] font-bold text-center">
        O que <span className="text-[#126091]">deseja?</span>
      </h1>
      <nav>
        <ul className="flex flex-col  gap-2">
          <li>
            <a href="#matinais">Matinais</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#salgados">Salgados</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#sanduiches">Sanduiches</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#lanches">Lanches</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#refeicoes">Refeicoes</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#porcoes">Porcoes</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#bebidas">Bebidas</a>
            <FaExternalLinkAlt size={10} />
          </li>
          <li>
            <a href="#massas">Massas</a>
            <FaExternalLinkAlt size={10} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
