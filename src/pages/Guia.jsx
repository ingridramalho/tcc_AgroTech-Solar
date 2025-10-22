import { useState } from "react";
import { Link } from "react-router-dom";

export function Guia() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-montserrat font-bold overflow-x-hidden relative">
      
      {/* Cabeçalho */}
      <header className="w-full flex justify-between items-center px-4 md:px-16 py-3 md:py-6 relative z-20">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18 w-auto" />
          <div className="flex flex-col leading-tight -ml-3">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">
              AgroTech
            </span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">
              Solar
            </span>
          </div>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-[#334E3F] text-3xl flex justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-montserrat font-bold text-[#334E3F]">
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/jogo">Jogo</Link>
          <Link to="/referencias">Referência</Link>
          <Link to="/quemsomos">Quem Somos</Link>
        </nav>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="absolute top-[70px] right-4 bg-white dark:bg-[#6C8776]/80 rounded-2xl shadow-lg p-4 flex flex-col gap-3 text-[#334E3F] dark:text-white font-medium text-sm w-48 animate-fadeIn z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-lg font-bold text-[#334E3F] dark:text-[#EEF4EE]"
            >
              ✕
            </button>

            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">
              Início
            </Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">
              Produtos
            </Link>
            <Link to="/jogo" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">
              Jogo
            </Link>
            <Link to="/referencias" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">
              Referência
            </Link>
            <Link to="/quemsomos" onClick={() => setMenuOpen(false)} className="hover:text-[#6C8776]">
              Quem Somos
            </Link>
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

        {/* Passos */}
        <div className="flex flex-col items-center space-y-5 sm:space-y-8 mt-2 sm:mt-8 w-full">
          {[
            {
              titulo: "1º Passo – Conecte a bateria:",
              texto:
                "Posicione a bateria no compartimento adequado e conecte os fios nos terminais do controlador de carga.",
            },
            {
              titulo: "2º Passo – Ative o sistema solar:",
              texto:
                "Garanta que os painéis solares estejam bem posicionados para captar a luz solar. O sistema ligará automaticamente quando houver energia suficiente.",
            },
            {
              titulo: "3º Passo – Monitore e irrigue:",
              texto:
                "O ESP32 irá ler os dados dos sensores. Se necessário, o sistema ativará automaticamente a irrigação. Você pode acompanhar tudo pelo visor ou aplicativo.",
            },
            {
              titulo: "4º Passo – Detecte emergências:",
              texto:
                "O ESP32 irá ler os dados dos sensores. Caso o sensor detecte alta temperatura ou fumaça, o sistema enviará um alerta para o responsável.",
            },
            {
              titulo: "5º Passo – Finalize o uso:",
              texto:
                "Após o uso, desligue o sistema pelo painel e desconecte a bateria com cuidado para garantir segurança e durabilidade.",
            },
          ].map((passo, i) => (
            <div
              key={i}
              className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-4 sm:p-5 w-[90%] sm:w-[900px] shadow"
            >
              <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB] text-sm sm:text-base">
                {passo.titulo}
              </strong>
              <p className="text-[#334E3F] dark:text-[#334E3F] font-poppins font-light mt-1 text-sm sm:text-base">
                {passo.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Vídeo */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center mb-10">
          <h2 className="text-lg sm:text-xl font-poppins font-semibold text-[#6C8776] dark:text-[#D4DDD2]">
            Vídeo <span className="text-[#394931]">Instrução:</span>
          </h2>
          <div className="mt-4 sm:mt-6 w-48 sm:w-60 h-28 sm:h-35 bg-[rgba(108,135,118,0.5)] rounded-lg flex items-center justify-center shadow">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] border-b-[8px] sm:border-b-[10px] border-l-[14px] sm:border-l-[16px] border-t-transparent border-b-transparent border-l-[rgba(108,135,118,0.5)]"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Animação do menu */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
