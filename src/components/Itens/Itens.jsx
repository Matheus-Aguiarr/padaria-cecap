import "./Itens.css";

const Itens = ({ imagem, nome }) => {
  return (
    <div className="product">
      <div className="header-product">
        <img src={imagem} alt={nome} />
      </div>
      <div className="footer-product">
        <h4 className="text-center">{nome}</h4>
        <a
          href=""
          className="bg-[#126091] w-[fit-content] text-white rounded-lg text-center hover:bg-white hover:text-[#126091] hover:border-[#126091] border-2 border-[#126091] duration-500 hover:shadow-lg shadow-[#126091]"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Itens;
