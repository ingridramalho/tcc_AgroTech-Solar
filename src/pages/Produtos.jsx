import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

export function Produtos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");
    if (theme === "dark") tagHTML.classList.add("dark");
  }, [theme]);

  const produtos = [
    { img: "/esp32.png", nome: "Placa de Desenvolvimento ESP32", preco: "R$ 49,90" },
    { img: "/rele.png", nome: "Módulo Relé 5V", preco: "R$ 15,00" },
    { img: "/sensordht11.png", nome: "Sensor De Temperatura DHT11", preco: "R$ 10,90" },
    { img: "/sensor-umidade.png", nome: "Sensor de Umidade do Solo", preco: "R$ 15,00" },
    { img: "/sensorchuva.png", nome: "Sensor de Chuva", preco: "R$ 5,50" },
    { img: "/minibomba.png", nome: "Mini Bomba de Água Submersível", preco: "R$ 9,11" },
    { img: "/painelsolar.png", nome: "Painel Solar 2W", preco: "R$ 79,90" },
  ];

  return (
    <div className="font-poppins min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-Montserrat font-bold overflow-x-hidden relative">

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

        <nav className="hidden md:flex items-center space-x-6 text-lg font-Montserrat font-bold text-[#334E3F]">
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

      <main className="flex-1 flex flex-col items-center px-6 md:px-40">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#334E3F] dark:text-[#EEF4EE] mb-10 mt-10 text-center">
          Produtos <span className="font-poppins font-semibold text-[#6C8776] dark:text-[#334E3F]">Utilizados</span>
        </h2>

        <div className="space-y-4 w-full max-w-2xl">
          {produtos.map((p, i) => (
            <div key={i} className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-3 md:px-4 py-3 rounded-xl shadow-md">
              <div className="bg-white rounded-md p-1 md:p-2 mr-3 md:mr-4 flex justify-center items-center">
                <img src={p.img} alt={p.nome} className="w-12 h-12 md:w-14 md:h-14" />
              </div>
              <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light text-sm md:text-base">
                {p.nome} – <span className="text-[#334E3F] font-poppins font-bold">{p.preco}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Projeto e valor final */}
        <div className="text-center mb-12 mt-16">
          <h3 className="text-lg md:text-xl font-poppins text-[#6C8776] dark:text-[#EEF4EE]">
            Projeto <span className="font-poppins text-[#334E3F] dark:text-[#D4DDD2]">AgroTech Solar</span>
          </h3>
          <p className="text-base md:text-lg font-bold text-[#6C8776] dark:text-[#EEF4EE] mt-2">
            Valor Final: <span className="font-poppins font-bold dark:text-[#EEF4EE]">R$ 364,90</span>
          </p>
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
