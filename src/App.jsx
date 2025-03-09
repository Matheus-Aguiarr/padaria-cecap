import { useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Address from "./components/Address/Address.jsx";
import Menu from "./pages/Menu.jsx";


function App() {
  const navigate = useNavigate();

  function onSeeMenuClick() {
    navigate("/menu");
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-[#c8eaff]">
      <Header />

      <Home />

      <section id="menu" className="menu">
        <h2 className="text-center font-bold text-3xl overflow-y-hidden">
          Nosso <span className="text-[#126091]">Cardápio</span>
        </h2>

        <div className="menu-way overflow-y-hidden" onClick={onSeeMenuClick}>
          <a className="more bg-[#126091] text-white rounded-lg text-center hover:bg-white hover:text-[#126091] hover:border-[#126091] border-2 border-[#126091] duration-500 hover:shadow-lg shadow-[#126091] px-4 py-2 text-[20px]">
            Confira o <span className="">Cardápio Completo</span>
          </a>
        </div>
      </section>

      <Contact />
      <Address />
    </div>
  );
}

export default App;
