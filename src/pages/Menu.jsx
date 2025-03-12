import Header from "../components/Header/Header.jsx";
import Itens from "../components/Itens/Itens.jsx";
import "./Menu.css";

const Menu = () => {
  const lanchesItems = [
    {
      name: "Pao Frances",
      type: "Lanche",
    },
    {
      name: "Mortadela",
      type: "Frios",
    },
  ];
  return (
    <div>
      <Header />
      <div className="lanches">
        <h2 className="text-3xl font-bold">Lanches</h2>
        {lanchesItems.map((item, index) => (
          <Itens name={item.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
