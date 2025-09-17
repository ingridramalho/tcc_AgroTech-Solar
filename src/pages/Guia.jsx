import { Header } from "../components/Header";

export function Guia() {
  return (
    <div className="min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-montserrat font-bold">
      <header className="w-full flex justify-between items-center px-16 py-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18" />
          <div className="flex flex-col leading-tight -ml-4">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">
              AgroTech
            </span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">
              Solar
            </span>
          </div>
        </div>

        <nav className="flex items-center space-x-8 -text-0.5xl font-Montserrat font-bold text-[#334E3F]">
          <input type="checkbox" className="sr-only peer" />
          <Header />
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center mt-8 w-full px-6">
        <h1 className="text-4xl font-poppins font-semibold text-[#6C8776] dark:text-[#D4DDD2] mt-12 mb-10">
          Guia de <span className="text-[#394931] dark:text-[#334E3F]">Utilização</span>
        </h1>
        <p className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-medium mt-4 text-1xl mb-10">
          Aprenda a utilizar o Agrotech Solar de forma simples e rápida
        </p>

        <div className="flex flex-col items-center space-y-8 mt-8 w-full">
          <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-5 w-[950px] shadow">
            <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB]">
              1º Passo – Conecte a bateria:
            </strong>
            <p className="text-[#334E3F] dark:text-[#334E3F] font-poppins font-light mt-1">
              Posicione a bateria no compartimento adequado e conecte os fios
              nos terminais do controlador de carga.
            </p>
          </div>

          <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-5 w-[950px] shadow">
            <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB]">
              2º Passo – Ative o sistema solar:
            </strong>
            <p className="text-[#334E3F] font-poppins font-light mt-1">
              Garanta que os painéis solares estejam bem posicionados para
              captar a luz solar. O sistema ligará automaticamente quando houver
              energia suficiente.
            </p>
          </div>

          <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-5 w-[950px] shadow">
            <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB]">
              3º Passo – Monitore e irrigue:
            </strong>
            <p className="text-[#334E3F] font-poppins font-light mt-1">
              O ESP32 irá ler os dados dos sensores. Se necessário, o sistema
              ativará automaticamente a irrigação. Você pode acompanhar tudo
              pelo visor ou aplicativo.
            </p>
          </div>

          <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-5 w-[950px] shadow">
            <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB]">
              4º Passo – Detecte emergências:
            </strong>
            <p className="text-[#334E3F] font-poppins font-light mt-1">
              O ESP32 irá ler os dados dos sensores. Se necessário, o sistema
              ativará automaticamente a irrigação. Você pode acompanhar tudo
              pelo visor ou aplicativo.
            </p>
          </div>

          <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE] dark:text-[#D4DDD2] text-left rounded-lg p-5 w-[950px] shadow">
            <strong className="font-poppins font-medium text-[#EEF4EE] dark:text-[#BFCFBB]">
              5º Passo – Finalize o uso:
            </strong>
            <p className="text-[#334E3F] font-poppins font-light mt-1">
              Caso o sensor detecte alta temperatura ou fumaça, um alarme será
              disparado e o sistema enviará um alerta para o responsável.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-xl font-poppins font-semibold text-[#6C8776] dark:text-[#D4DDD2]">
            Video <span className="text-[#394931]">Instrução:</span>
          </h2>
          <div className="mt-6 w-60 h-35 bg-[rgba(108,135,118,0.5)] rounded-lg flex items-center justify-center shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-[rgba(108,135,118,0.5)]"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}