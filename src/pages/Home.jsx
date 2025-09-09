import { Header } from "../components/Header";

export function Home() {
    return (
      <div className="min-h-screen bg-[#F4F9F4]  flex flex-col font-sans">
        {/* Header */}
        <header className="w-full flex justify-between items-center px-16 py-6">
  {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="AgroTech Solar" className="h-18" />
      <div className="flex flex-col leading-tight -ml-4">
        <span className="text-[#2C4425] font-bold text-2xl mb-0.1">AgroTech</span>
          <span className="text-[#6C8776] font-bold text-xl self-end">Solar</span>
      </div>
     </div>
          
          <div className="w-5 h-5 rounded-full border border-gray-400 mb-25"></div>
        </header>
  
        {/* Hero Section */}
        <section className="px-6 md:px-50 py-4 flex flex-col md:flex-row items-center gap-10 mb-10">
          {/* Left */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-[#334E3F] leading-tight mb-10 mt-20">
              Mini Lavoura <br /> Automatizada
            </h1>
            <p className="text-lg text-[#6C8776] mb-15 max-w-md">
              Uma inteligência de automação agrícola com energia solar para
              otimizar luz, temperatura e irrigação.
            </p>
            <button className="bg-[#5D7466] text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
           SAIBA MAIS
           </button>
          </div>
  
          {/* Right */}
          <div className="flex-1 flex justify-center items-start">
            <img src="/trator.png" alt="Trator" className="h-80 -mb-10" />
          </div>
        </section>
  
        {/* Introduction */}
        <section>
          <h2 className="text-[#334E3F] md:px-105 font-bold text-xl mb-10 mt-50">INTRODUÇÃO</h2>
  
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Illustration */}
            <div className="flex-1 flex justify-center">
              <img src="/lavoura.png"
                alt="Mini lavoura"
                className=" h-auto max-h-85"
              />
            </div>
  
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#334E3F]">
                  Objetivo:
                </h3>
                <ul className="list-disc list-inside text-[#738071]">
                  <li>
                    Otimizar o cultivo com uso consciente de energia e água,
                    oferecendo uma  <br /> solução acessível a agricultores de todos os
                    portes.
                  </li>
                </ul>
              </div>
  
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#334E3F]">
                  Público-alvo:
                </h3>
                <ul className="list-disc list-inside text-[#738071]">
                  <li>Pequenos, médios e grandes produtores</li>
                  <li>Cooperativas e estudantes de agronomia</li>
                </ul>
              </div>
  
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#334E3F]">
                  Nosso diferencial:
                </h3>
                <ul className="list-disc list-inside text-[#738071]">
                  <li>Energia 100% renovável com painéis solares integrados</li>
                  <li>
                    Sensores de umidade, luminosidade e temperatura em tempo real
                  </li>
                  <li>
                    Aplicativo próprio para controle remoto e acompanhamento dos
                    dados
                  </li>
                </ul>
              </div>
  
            </div>
          </div>
        </section>
      </div>
    );
  }
  