import { Header } from "../components/Header";

export function Home() {
  return (
    
    <div className="min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-montserrat font-bold">
      <header className="w-full flex justify-between items-center px-4 md: px-16 py-3 md:py-6">

        <div className="flex items-center">
          <img src="/logo.png" dark:src="/trator2.png" alt="AgroTech Solar" className="h-10 md:h-16" />
          <div className="flex flex-col leading-tight -ml-4">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">Solar</span>
          </div>
        </div>

        

  <button className="md:hidden text-[#334E3F] text-3xl w-full flex justify-center items-center">
          ☰
        </button>

        <nav className="flex items-center space-x-1 -text-0.5xl font-Montserrat font-bold text-[#334E3F]">

          <input type="checkbox" className="sr-only peer" />
          <Header />
          

        </nav>

      </header>

      <section className="px-6 md:px-50 py-4 flex flex-col md:flex-row items-center gap-10 mb-10">

        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-[#334E3F] leading-tight mb-10 mt-20">
            Mini Lavoura <br /> Automatizada
          </h1>
          <p className="text-lg text-[#6C8776] dark:text-[#EEF4EE] mb-15 max-w-md font-inter font-light">
            Uma inteligência de automação agrícola com energia solar para
            otimizar luz, temperatura e irrigação.
          </p>

        </div>

        <div className="flex-1 flex justify-center items-start">
          <img src="/trator.png" dark:src="/trator2.png" alt="Trator" className="h-85 -mb-25" />
        </div>
      </section>

      <section>
        <h2 className="text-[#334E3F] md:px-105 font-poppins font-bold text-xl mb-10 mt-50">INTRODUÇÃO</h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">

          <div className="flex-1 flex justify-center">
            <img src="/lavoura.png" alt="Mini lavoura" className=" h-auto max-h-85" />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-poppins font-medium text-lg mb-2 text-[#334E3F]">
                Objetivo:
              </h3>
              <ul className="list-disc list-inside text-[#738071] dark:text-[#EEF4EE]">
                <li className="font-inter font-light">
                  Otimizar o cultivo com uso consciente de energia e água,
                  oferecendo uma  <br /> solução acessível a agricultores de todos os
                  portes.
                </li>
              </ul>
            </div>

            <div>
              <h3 className=" font-poppins font-medium text-lg mb-2 text-[#334E3F]">
                Público-alvo:
              </h3>
              <ul className="list-disc list-inside text-[#738071] dark:text-[#EEF4EE] font-inter font-light">
                <li>Pequenos, médios e grandes produtores</li>
                <li>Cooperativas e estudantes de agronomia</li>
              </ul>
            </div>

            <div>
              <h3 className="font-poppins font-medium text-lg mb-2 text-[#334E3F]">
                Nosso diferencial:
              </h3>
              <ul className="list-disc list-inside text-[#738071] dark:text-[#EEF4EE] font-inter font-light">
                <li>Energia 100% renovável com painéis solares integrados</li>
                <li>
                  Sensores de umidade, luminosidade e temperatura em tempo real
                </li>
                <li>
                  Aplicativo próprio para controle remoto e acompanhamento dos
                  dados
                </li>
              </ul>

              <nav className="hidden md:flex items-center space-x-1 text-base font-montserrat font-bold text-[#334E3F]">
             <input type="checkbox" className="sr-only peer" />
            
             
              </nav>
 
            </div>

          </div>
        </div>
       
         
        
      </section>
    </div>
   
  );
}
