import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";

export function Referencias() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");
    if (theme === "dark") tagHTML.classList.add("dark");
  }, [theme]);

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

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#334E3F] text-3xl flex justify-center items-center">☰</button>

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
            <button onClick={() => setMenuOpen(false)} className="self-end text-lg font-bold text-[#334E3F] dark:text-[#EEF4EE]">✕</button>

            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Início</Link>
            <Link to="/guia" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Guia</Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Produtos</Link>
            <Link to="/jogo" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Jogo</Link>
            <Link to="/referencias" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Referência</Link>
            <Link to="/quemsomos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">Quem Somos</Link>

            {/* Dark Mode Mobile */}
            <button
              onClick={() => setTheme(prev => (prev === "dark" ? "" : "dark"))}
              className="mt-2 self-start text-[#334E3F] dark:text-white"
            >
              {theme === "dark" ? <SunIcon size={26} weight="fill" /> : <MoonStarsIcon size={26} weight="fill" />}
            </button>
          </div>
        )}
      </header>

      <main className="flex flex-1 justify-center items-start px-4 py-10 md:py-20">
        <div className="bg-[#C7D6CC] dark:bg-[#6D8777] max-w-7xl w-full min-h-[95vh] rounded-3xl shadow-md p-10 md:p-20 flex flex-col justify-between">
          
          <h2 className="bg-[#334E3F] dark:bg-[#BFCFBB] text-[#EEF4EE] dark:text-[#45624E] text-center text-base md:text-xl font-poppins font-extrabold rounded-full py-3 px-10 mb-10 w-fit mx-auto"> Referências </h2>

          <p className="text-[#45624E] dark:text-[#EEF4EE] text-base md:text-lg font-poppins font-semibold leading-loose mb-10 max-w-2xl mx-auto">
            A ineficiência no controle de luz, temperatura e irrigação em plantações são fatores que afetam diretamente a produtividade e o consumo de recursos naturais. O desperdício de água, o excesso de calor e a dependência de energia externa tornam a agricultura menos sustentável e mais onerosa. A falta de soluções acessíveis e automatizadas agrava esses desafios, dificultando a adaptação dos agricultores às mudanças climáticas e à necessidade de maior eficiência produtiva.
          </p>

          <div className="mt-6 w-full max-w-full">
            <h3 className="text-[#EEF4EE] dark:text-[#45624E] font-poppins text-lg md:text-2xl font-extrabold mb-6">Artigos científicos:</h3>

            <ul className="list-disc pl-6 space-y-3 text-[#334E3F] dark:text-[#EEF4EE] text-sm md:text-base break-words">
              <li>
                <a href="http://revista.unipacto.com.br/index.php/multidisciplinar/article/view/2907" className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold break-words" target="_blank" rel="noreferrer">
                  http://revista.unipacto.com.br/index.php/multidisciplinar/article/view/2907
                </a>
              </li>
              <li>
                <a href="https://www.scielo.br/j/cr/a/dWYKgtvKthbcnWFFpVmjH3k/" className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold break-words" target="_blank" rel="noreferrer">
                  https://www.scielo.br/j/cr/a/dWYKgtvKthbcnWFFpVmjH3k/
                </a>
              </li>
              <li>
                <a href="https://repositorio.utfpr.edu.br/jspui/bitstream/1/7470/3/CP_COAUT_2015_1_05.pdf" className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold break-words" target="_blank" rel="noreferrer">
                  https://repositorio.utfpr.edu.br/jspui/bitstream/1/7470/3/CP_COAUT_2015_1_05.pdf
                </a>
              </li>
              <li>
                <a href="https://www.sustenere.inf.br/index.php/rica/article/view/5829" className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold break-words" target="_blank" rel="noreferrer">
                  https://www.sustenere.inf.br/index.php/rica/article/view/5829
                </a>
              </li>
            </ul>
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
