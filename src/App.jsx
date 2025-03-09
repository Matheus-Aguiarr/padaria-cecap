import "./index.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Address from "./components/Address/Address.jsx";
import MenuWay from ".components/MenuWay/MenuWay.jsx";


function App() {

  return (
    <div className="w-[100vw] h-[100vh] bg-[#c8eaff]">
      <Header />
      <Home />
      <MenuWay />
      <Contact />
      <Address />
    </div>
  );
}

export default App;
