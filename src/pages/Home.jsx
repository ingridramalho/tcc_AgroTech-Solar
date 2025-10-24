import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");
    if (theme === "dark") tagHTML.classList.add("dark");
  }, [theme]);

  return (
    <div className="w-full min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-montserrat font-bold overflow-x-hidden relative">
      
      <header className="w-full flex justify-between items-center px-4 md:px-16 py-3 md:py-6 relative z-20">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18 w-auto" />
          <div className="flex flex-col leading-tight -ml-3">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">Solar</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-montserrat font-bold text-[#334E3F]">
          <Link to="/">Início</Link>
          <Link to="/guia">Guia</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/jogo">Jogo</Link>
          <Link to="/referencias">Referência</Link>
          <Link to="/quemsomos">Quem Somos</Link>

          {/* Dark Mode Desktop */}
          <button
            onClick={() => setTheme(prev => (prev === "dark" ? "" : "dark"))}
            className="ml-4 text-[#334E3F] dark:text-white flex items-center justify-center"
          >
            {theme === "dark" ? <SunIcon size={26} weight="fill" /> : <MoonStarsIcon size={26} weight="fill" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#334E3F] text-3xl flex justify-center items-center ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[70px] right-4 bg-white dark:bg-[#6C8776]/80 rounded-2xl shadow-lg p-4 flex flex-col gap-3 text-[#334E3F] dark:text-white font-medium text-sm w-48 animate-fadeIn z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-lg font-bold text-[#334E3F] dark:text-[#EEF4EE]"
            >
              ✕
            </button>

            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Início</Link>
            <Link to="/guia" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Guia</Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Produtos</Link>
            <Link to="/jogo" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Jogo</Link>
            <Link to="/referencias" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Referência</Link>
            <Link to="/quemsomos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Quem Somos</Link>

            <button
              onClick={() => setTheme(prev => (prev === "dark" ? "" : "dark"))}
              className="mt-2 self-start text-[#334E3F] dark:text-white"
            >
              {theme === "dark" ? <SunIcon size={26} weight="fill" /> : <MoonStarsIcon size={26} weight="fill" />}
            </button>
          </div>
        )}
      </header>

      {/* Conteúdo da Home */}
      <section className="px-6 md:px-24 py-9 flex flex-col md:flex-row items-center gap-10 mb-10 flex-grow">
        <div className="flex-1 gap-6">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-[#334E3F] leading-tight mb-10 mt-10">Mini Lavoura Automatizada</h1>
          <p className="text-lg text-[#6C8776] dark:text-[#EEF4EE] mb-10 max-w-md font-inter font-light">
            Uma inteligência de automação agrícola com energia solar para otimizar luz, temperatura e irrigação.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/trator.png" alt="Trator" className="h-72 md:h-85 -mb-10" />
        </div>
      </section>

      <section className="px-6 md:px-24 pb-20">
        <h2 className="text-[#334E3F] font-poppins font-bold text-xl mb-10 mt-10">INTRODUÇÃO</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 flex justify-center">
            <img src="/lavoura.png" alt="Mini lavoura" className="h-auto max-h-85" />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-poppins font-medium text-lg mb-2 text-[#334E3F]">Objetivo:</h3>
              <ul className="list-disc list-inside text-[#738071] dark:text-[#EEF4EE]">
                <li className="font-inter font-light">Otimizar o cultivo com uso consciente de energia e água, oferecendo uma solução acessível a agricultores de todos os portes.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-medium text-lg mb-2 text-[#334E3F]">Público-alvo:</h3>
              <ul className="list-disc list-inside text-[#738071] dark:text-[#EEF4EE] font-inter font-light">
                <li>Pequenos, médios e grandes produtores</li>
                <li>Cooperativas e estudantes de agronomia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-medium text-lg mb-2 text-[#334E3F]">Nosso diferencial:</h3>
              <ul className="list-disc list-inside text-[#738071] dark:text-[#EEF4EE] font-inter font-light">
                <li>Energia 100% renovável com painéis solares integrados</li>
                <li>Sensores de umidade, luminosidade e temperatura em tempo real</li>
                <li>Aplicativo próprio para controle remoto e acompanhamento dos dados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
      `}</style>
    </div>
  );
}
