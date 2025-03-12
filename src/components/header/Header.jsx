import logo from "../../assets/panificadora-cecap-logo.png";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateHome = useNavigate();
  function onNavClick(complement) {
    navigateHome("/" + complement);
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" onClick={onNavClick}>
          <img src={logo} alt="" />
        </a>
        <a href="" className="burger-menu" onClick={toggleMenu}>
          <IoMenu size={25} />
        </a>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" onClick={() => onNavClick("#home")}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#menu" onClick={() => onNavClick("#menu")}>
              Cardápio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => onNavClick("#contact")}>
              Contato
            </a>
          </li>
          <li className="nav-item">
            <a href="#address" onClick={() => onNavClick("#address")}>
              Endereço
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
