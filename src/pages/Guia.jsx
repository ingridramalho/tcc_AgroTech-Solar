import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

export function Guia() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");
    if (theme === "dark") tagHTML.classList.add("dark");
  }, [theme]);

  return (
    <div className="min-h-screen w-full bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-montserrat font-bold overflow-x-hidden relative">
      
      <header className="w-full flex justify-between items-center px-4 md:px-16 py-3 md:py-6 relative z-20">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18 w-auto" />
          <div className="flex flex-col leading-tight -ml-3">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">Solar</span>
          </div>
        </div>

        <button
          className="md:hidden text-[#334E3F] text-3xl flex justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center space-x-8 text-lg font-montserrat font-bold text-[#334E3F]">
          <Link to="/">Início</Link>
          <Link to="/guia">Guia</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/jogo">Jogo</Link>
          <Link to="/referencias">Referência</Link>
          <Link to="/quemsomos">Quem Somos</Link>
        </nav>

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

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center text-center mt-6 sm:mt-8 w-full px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl font-poppins font-semibold text-[#6C8776] dark:text-[#D4DDD2] mt-6 sm:mt-12 mb-4 sm:mb-10">
          Guia de <span className="text-[#394931] dark:text-[#334E3F]">Utilização</span>
        </h1>

        <p className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-medium text-sm sm:text-lg mb-6 sm:mb-10 max-w-[90%] sm:max-w-none">
          Aprenda a utilizar o Agrotech Solar de forma simples e rápida
        </p>

        <div className="flex flex-col items-center space-y-5 sm:space-y-8 mt-2 sm:mt-8 w-full">
          {[
            { titulo: "1º Passo – Conecte a bateria:", texto: "Posicione a bateria no compartimento adequado e conecte os fios nos terminais do controlador de carga." },
            { titulo: "2º Passo – Ative o sistema solar:", texto: "Garanta que os painéis solares estejam bem posicionados para captar a luz solar. O sistema ligará automaticamente quando houver energia suficiente." },
            { titulo: "3º Passo – Monitore e irrigue:", texto: "O ESP32 irá ler os dados dos sensores. Se necessário, o sistema ativará automaticamente a irrigação. Você pode acompanhar tudo pelo visor ou aplicativo." },
            { titulo: "4º Passo – Detecte emergências:", texto: "O ESP32 irá ler os dados dos sensores. Caso o sensor detecte alta temperatura ou fumaça, o sistema enviará um alerta para o responsável." },
            { titulo: "5º Passo – Finalize o uso:", texto: "Após o uso, desligue o sistema pelo painel e desconecte a bateria com cuidado para garantir segurança e durabilidade." },
          ].map((passo, i) => (
            <div key={i} className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-4 sm:p-5 w-[90%] sm:w-[900px] shadow">
              <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB] text-sm sm:text-base">{passo.titulo}</strong>
              <p className="text-[#334E3F] dark:text-[#334E3F] font-poppins font-light mt-1 text-sm sm:text-base">{passo.texto}</p>
            </div>
          ))}
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
