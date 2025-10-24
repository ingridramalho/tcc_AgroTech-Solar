import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

export function Jogo() {
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

        <button className="md:hidden text-[#334E3F] text-3xl flex justify-center items-center" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <nav className="hidden md:flex items-center space-x-6 text-lg font-montserrat font-bold text-[#334E3F]">
          <Link to="/">Início</Link>
          <Link to="/guia">Guia</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/jogo">Jogo</Link>
          <Link to="/referencias">Referência</Link>
          <Link to="/quemsomos">Quem Somos</Link>

          <button
            onClick={() => setTheme(prev => (prev === "dark" ? "" : "dark"))}
            className="ml-4 text-[#334E3F] dark:text-white flex items-center justify-center"
          >
            {theme === "dark" ? <SunIcon size={26} weight="fill" /> : <MoonStarsIcon size={26} weight="fill" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute top-[70px] right-4 bg-white dark:bg-[#6C8776]/80 rounded-2xl shadow-lg p-4 flex flex-col gap-3 text-[#334E3F] dark:text-white font-medium text-sm w-48 animate-fadeIn z-50">
            <button onClick={() => setMenuOpen(false)} className="self-end text-lg font-bold text-[#334E3F] dark:text-[#EEF4EE]">✕</button>

            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Início</Link>
            <Link to="/guia" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Guia</Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Produtos</Link>
            <Link to="/jogo" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Jogo</Link>
            <Link to="/referencias" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Referência</Link>
            <Link to="/quemsomos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Quem Somos</Link>

            {/* Ícone Dark Mode mobile */}
            <button
              onClick={() => setTheme(prev => (prev === "dark" ? "" : "dark"))}
              className="mt-2 self-start text-[#334E3F] dark:text-white"
            >
              {theme === "dark" ? <SunIcon size={26} weight="fill" /> : <MoonStarsIcon size={26} weight="fill" />}
            </button>
          </div>
        )}
      </header>

      <main className="flex justify-center items-center px-6 py-12">
        <div className="bg-[#C7D6CC] dark:bg-[#6D8777] max-w-6xl w-full rounded-2xl shadow-md p-6 md:p-12 mt-6 mb-10 transition-all duration-300">
          <div className="flex justify-center">
            <button className="bg-[#334E3F] dark:bg-[#BFCFBB] mb-8 p-5 text-white dark:text-[#45624E] text-center text-lg md:text-2xl font-poppins font-extrabold rounded-full py-4 px-10 w-fit mx-auto">
              AgroGuardian
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-15 mt-10">
            <div>
              <h2 className="font-poppins font-bold mb-7 text-[#EEF4EE] dark:text-[#45624E]">
                Missão Solar (Destaque para a proteção e tecnologia solar no campo e na floresta)
              </h2>
              <p className="text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold mb-4">
                No Reino Verde, a natureza era cuidada por uma miniatura de lavoura automatizada, alimentada pelos poderosos Cristais Solares. Esse sistema mágico controlava a luz, a irrigação e a temperatura das plantações, mantendo tudo em equilíbrio.
              </p>
              <p className="text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold mb-4">
                Mas tudo mudou quando os cristais foram roubados. O clima ficou instável, as colheitas começaram a falhar e a lavoura automatizada parou de funcionar.
              </p>
              <p className="text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold mt-5 mb-5">
                Agora, os jovens guardiões Lyra, Lucky e Finn precisam atravessar florestas, cavernas e montanhas para recuperar os cristais e restaurar o equilíbrio da agricultura mágica antes que seja tarde demais.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6 gap-5 mt-5">
              <img src="/jogo.png" alt="Personagens AgroGuardian" className="rounded-2xl w-full md:w-100 h-auto"/>
              <button className="bg-[#334E3F] dark:bg-[#BFCFBB] text-white dark:text-[#45624E] px-10 py-3 rounded-full font-poppins font-bold">
                Jogar
              </button>
            </div>
          </div>
        </div>
      </main>

      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
        `}
      </style>
    </div>
  );
}
