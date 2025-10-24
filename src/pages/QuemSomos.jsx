import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

export function QuemSomos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");
    if (theme === "dark") tagHTML.classList.add("dark");
  }, [theme]);

  return (
    <div className="font-poppins min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-Montserrat font-bold relative">

      <header className="w-full flex justify-between items-center px-4 md:px-16 py-3 md:py-6 relative z-20">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18 w-auto" />
          <div className="flex flex-col leading-tight -ml-3">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">Solar</span>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#334E3F] text-3xl flex justify-center items-center">☰</button>

        <nav className="hidden md:flex items-center space-x-8 text-lg font-Montserrat font-bold text-[#334E3F]">
          <Link to="/">Início</Link>
          <Link to="/guia">Guia</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/jogo">Jogo</Link>
          <Link to="/referencias">Referência</Link>
          <Link to="/quemsomos">Quem Somos</Link>
        </nav>

        {menuOpen && (
          <div className="absolute top-[70px] right-4 bg-white dark:bg-[#6C8776]/80 rounded-2xl shadow-lg p-4 flex flex-col gap-3 text-[#334E3F] dark:text-white font-medium text-sm w-48 animate-fadeIn">
            <button onClick={() => setMenuOpen(false)} className="self-end text-lg font-bold text-[#334E3F] dark:text-[#EEF4EE]">✕</button>

            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Início</Link>
            <Link to="/guia" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Guia</Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Produtos</Link>
            <Link to="/jogo" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Jogo</Link>
            <Link to="/referencias" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Referência</Link>
            <Link to="/quemsomos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Quem Somos</Link>

            {/* Ícone de dark mode */}
            <button
              onClick={() => setTheme((prev) => (prev === "dark" ? "" : "dark"))}
              className="mt-2 self-start text-[#334E3F] dark:text-white"
            >
              {theme === "dark" ? <SunIcon size={26} weight="fill" /> : <MoonStarsIcon size={26} weight="fill" />}
            </button>
          </div>
        )}
      </header>

      <section className="flex flex-col items-center py-10 mt-15">
        <h2 className="text-4xl font-poppins font-semibold text-[#6C8776] dark:text-[#EEF4EE] mb-20 mt-10 text-center">
          Quem <span className="font-poppins font-semibold text-[#334E3F]"> somos?</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-20 md:gap-10 justify-center">
          <div className="flex flex-col items-center text-center">
            <img src="foto-gaby.jpeg" alt="Gabrielly" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="text-[#334E3F] dark:text-[#334E3F] mt-4 font-poppins font-regular">Gabrielly Martins</p>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-semibold text-sm">@gabxtinz</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="foto-ingrid.jpeg" alt="Ingrid" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="text-[#334E3F] dark:text-[#334E3F] mt-4 font-poppins font-regular">Ingrid Ramalho</p>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-semibold text-sm">@ingrid_rsj</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="foto-duda.jpeg" alt="Eduarda" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="text-[#334E3F] dark:text-[#334E3F] mt-4 font-poppins font-regular">Mª Eduarda Bistaffa</p>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-semibold text-sm">@dudabistaffa</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-6 mt-6">
        <h3 className="text-2xl font-poppins font-semibold text-[#6C8776] dark:text-[#EEF4EE] mb-5 mt-2">
          Entre em Contato
        </h3>
        <p className="text-[#6C8776] dark:text-[#334E3F] font-poppins font-regular mb-5 mt-2 text-center max-w-xs">
          Estamos prontos para te ajudar! Envie sua mensagem e responderemos o mais rápido possível.
        </p>

        <form className="flex flex-col items-center gap-4 w-full max-w-xs">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col flex-1">
              <label className="font-poppins font-medium text-gray-600 dark:text-[#EEF4EE] mb-1 mt-4">Nome</label>
              <input type="text" className="flex-1 p-3 rounded-lg border-gray-300 dark:text-[#6D8777] bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-poppins font-medium text-gray-600 dark:text-[#EEF4EE] mb-1 mt-4">Email</label>
              <input type="email" className="flex-1 p-3 rounded-lg border-gray-300 dark:text-[#6D8777] bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
          </div>

          <div className="flex flex-col w-full mb-8 mt-3">
            <label className="font-poppins font-medium text-gray-600 dark:text-[#EEF4EE] mb-1 mt-4">Assunto</label>
            <textarea className="w-full p-3 h-20 rounded-lg border-gray-300 dark:text-[#6D8777] bg-[rgba(108,135,118,0.5)] focus:outline-none focus:ring-2 focus:ring-green-300 resize-none mb-3"></textarea>
          </div>

          <button type="submit" className="bg-[rgba(108,135,118,0.5)] hover:text-[#394931] dark:text-[#EEF4EE] px-12 py-3 rounded-xl font-poppins font-regular transition mb-5">
            Enviar
          </button>
        </form>

        <div className="flex flex-col items-center mt-10">
          <p className="text-[#6C8776] dark:text-[#EEF4EE] mb-4 font-poppins font-semibold">Encontre-nos em</p>
          <div className="flex gap-6 text-gray-600 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram hover:text-green-600 w-10 h-10"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter hover:text-green-600 w-10 h-10"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook hover:text-green-600 w-10 h-10"></i>
            </a>
          </div>

          <div className="flex gap-8 mt-6">
            <img src="email.png" alt="logo1" className="w-10 h-10 rounded-lg shadow-md"/>
            <img src="instagram.png" alt="logo2" className="w-10 h-10 rounded-lg shadow-md"/>
            <img src="telefone.png" alt="logo3" className="w-10 h-10 rounded-lg shadow-md"/>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
        `}
      </style>
    </div>
  );
}
