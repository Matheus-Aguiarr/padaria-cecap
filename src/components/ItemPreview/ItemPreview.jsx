import "./ItemPreview.css";
import { TiStarFullOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const ItemPreview = ({ name, img }) => {
  return (
    <motion.div
      className="ItemPreview w-[300px] h-[300px] flex flex-col bg-[white] rounded-xl gap-1 overflow-y-hidden"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="etiqueta bg-[red] w-[fit-content] rounded-tl-xl rounded-br-xl text-white">
        Destaque
      </div>
      <div className="imgItemPreview w-[80%] self-center">
        <img src={img} alt={name} className="w-[100%] rounded-xl" />
      </div>
      <div className="itemPreviewName self-center">
        <p className="text-[20px]">{name}</p>
      </div>

      <a
        href={`https://wa.me/5511963398711?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%${name}`}
        className="buy-button bg-[#126091] text-white text-center w-[50%] overflow-y-hidden self-center rounded-xl hover:bg-[white] hover:text-[#126091] "
      >
        Comprar
      </a>
    </motion.div>
  );
};

export default ItemPreview;
