import "./Itens.css";

const Itens = ({ name, sessao }) => {
  return (
    <div className="product" id={sessao}>
      <img src={name} alt="Parte do cardapio" className="img-cardapio" />
    </div>
  );
};

export default Itens;
