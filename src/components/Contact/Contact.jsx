import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-center overflow-y-hidden">
        Fale <span className="text-[#126091]">Conosco</span>
      </h2>
      <form
        action="https://formsubmit.co/your@email.com"
        className="flex flex-col items-center form"
        method="POST"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Digite seu nome"
          className="bg-[#126091] rounded-xl text-left"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Digite seu email"
          className="bg-[#126091] rounded-xl text-left"
        />
        <textarea
          name="message"
          placeholder="Digite sua mensagem"
          id=""
          className="h-28
          bg-[#126091] rounded-xl text-left"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-[#113891] text-white px-4 py-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
