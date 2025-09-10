import { Header } from "../components/Header";



export  function QuemSomos() {
  

  return (
    <div
      className={`min-h-screen font-sans flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#F4F9F4] text-gray-800"
      }`}
    >
      {/* Header */}
      <header className="w-full flex justify-between items-center px-16 py-6">
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-green-400" : "text-green-800"
          }`}
        >
          AgroTech Solar
        </h1>
        <nav className="flex gap-8 font-medium items-center">
          <a href="#">Projeto</a>
          <a href="#">Jogo</a>
          <a href="#">Quem somos</a>
          <a href="#">Login</a>

          {/* Toggle Claro/Escuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center"
          >
            <div
              className={`w-4 h-4 rounded-full transition ${
                darkMode ? "bg-green-400" : "bg-gray-300"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Quem Somos */}
      <section className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Quem somos?</h2>
        <div className="flex gap-20">
          {/* Gabrielly */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/180"
              alt="Gabrielly"
              className="w-44 h-44 object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-4 font-semibold">Gabrielly Martins</p>
            <span className="text-gray-500 text-sm">@gabiirsz</span>
          </div>
          {/* Ingrid */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/180"
              alt="Ingrid"
              className="w-44 h-44 object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-4 font-semibold">Ingrid Ramalho</p>
            <span className="text-gray-500 text-sm">@ingrid_rh</span>
          </div>
          {/* Eduarda */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/180"
              alt="Eduarda"
              className="w-44 h-44 object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-4 font-semibold">Mª Eduarda Bistaffa</p>
            <span className="text-gray-500 text-sm">@dudebistaffa</span>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="flex flex-col items-center py-12">
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          Entre em Contato
        </h3>
        <p className="text-gray-600 mb-10 text-center max-w-xl">
          Estamos prontos para te ajudar! Envie sua mensagem e responderemos o
          mais rápido possível.
        </p>

        {/* Form */}
        <form className="flex flex-col items-center gap-4 w-full max-w-xl">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Digite aqui..."
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Digite aqui..."
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <textarea
            placeholder="Digite aqui..."
            className="w-full p-3 h-20 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          ></textarea>

          {/* Botão */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold transition"
          >
            Enviar
          </button>
        </form>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center mt-10">
          <p className="text-gray-600 mb-4 font-medium">Encontre-nos em</p>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
