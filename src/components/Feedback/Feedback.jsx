import "./Feedback.css";
import amaroPhoto from "../../assets/amaro-neto.png";
import calosPhoto from "../../assets/carlos-motta.png";
import pammelaPhoto from "../../assets/pammela-naiade.png";
import Testimonials from "../Testimonials/Testimonials";

const Feedback = () => {
  return (
    <section
      id="feedback"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-center font-bold text-3xl overflow-y-hidden">
        O que nossos clientes dizem{" "}
        <span className="text-[#113891]">sobre nós?</span>
      </h2>
      <div className="testimonials flex flex-row gap-6 rounded-3xl">
        <Testimonials
          userText={
            "Uma das melhores opções de refeições no CECAP. Pratos bem servidos e muito saborosos. O destaque são os bifes a cavalo e a parmegiana, são gigantes e servem facilmente duas pessoas."
          }
          userImg={amaroPhoto}
          userName={"Amaro Neto"}
        />
        <Testimonials
          userText={
            "A melhor feijoada que já comi, e no café da manhã tem pão de queijo com Nutella. Tudo muito gostoso!"
          }
          userImg={pammelaPhoto}
          userName={"Pammela Náiade"}
        />
        <Testimonials
          userText={
            "Perfeito para tomar um café e fazer um lanche enquanto espera o seu voo em Guarulhos"
          }
          userImg={calosPhoto}
          userName={"Carlos Motta"}
        />
      </div>
    </section>
  );
};

export default Feedback;
