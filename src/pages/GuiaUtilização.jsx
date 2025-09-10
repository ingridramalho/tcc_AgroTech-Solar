import { Header } from "../components/Header";

export function GuiaUtilização() {
  return (
    <div className="min-h-screen bg-[#F4F9F4] flex flex-col font-sans">
      <header className="w-full flex justify-between items-center px-16 py-6">

        <div className="flex items-center">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18" />
          <div className="flex flex-col leading-tight -ml-4">
            <span className="text-[#2C4425] font-bold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] font-bold text-xl self-end">Solar</span>
          </div>
        </div>

        <div className="flex items-center space-x-10 text-[#2C4425] font-medium">
          <a href="#" className="hover:underline">Guia</a>
          <a href="#" className="hover:underline">Produtos</a>
          <a href="#" className="hover:underline">Quem somos</a>
          <a href="#" className="hover:underline">Referências</a>
          <a href="#" className="hover:underline">Jogo</a>

          <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center text-center mt-8 w-full px-6">
        <h1 className="text-2xl font-bold text-[#6C8776] mb-2 mt-12">
          Guia de <span className="text-[#394931]">Utilização</span>
        </h1>
        <p className="text-[#6C8776] font-medium mt-4 max-w-xl mb-5">
          Aprenda a utilizar o Agrotech Solar de forma simples e rápida
        </p>

        <div className="flex flex-col space-y-8 mt-8 max-w-2xl w-full">
          <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE]  text-[#334E3F] text-left rounded-lg p-4 shadow">
            <strong className="font-medium">1º Passo – Conecte a bateria:</strong>
            <br />
            <p className="text-[#334E3F] mt-1">
            Posicione a bateria no compartimento adequado e conecte os fios nos
            terminais do controlador de carga.
            </p>
         </div>
         </div>

         <div className="flex flex-col space-y-8 mt-8 max-w-2xl w-full"> 
           <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE]  text-[#334E3F] text-left rounded-lg p-4 shadow">
             <strong className="font-medium">2º Passo – Ative o sistema solar:</strong>
             <br />
            <p className="text-[#334E3F] mt-1">
            Garanta que os painéis solares estejam bem posicionados para captar a luz solar. O sistema ligará automaticamente quando houver energia suficiente.
            </p>
            </div>
         </div>

          <div className="flex flex-col space-y-8 mt-8 max-w-2xl w-full">
            <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE]  text-[#334E3F] text-left rounded-lg p-4 shadow">
              <strong className="font-medium"> 3º Passo – Monitore e irrigue:</strong>
              <br />
             <p className="text-[#334E3F] mt-1">
             O  ESP32 irá ler os dados dos sensores. Se necessário, o sistema ativará automaticamente a irrigação. Você pode acompanhar tudo pelo visor ou aplicativo.
            </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 mt-8 max-w-2xl w-full">
            <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE]  text-[#334E3F] text-left rounded-lg p-4 shadow">
            <strong className="font-medium">4º Passo – Detecte emergências:</strong>
            <br />
            <p className="text-[#334E3F] mt-1"> 
            O ESP32 irá ler os dados dos sensores. Se necessário, o sistema ativará automaticamente a irrigação. Você pode acompanhar tudo pelo visor ou aplicativo.
            </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 mt-8 max-w-2xl w-full">
            <div className="bg-[rgba(108,135,118,0.5)] text-[#EEF4EE]  text-[#334E3F] text-left rounded-lg p-4 shadow">
            <strong>5º Passo –  Finalize o uso:</strong>
            <br />
            <p className="text-[#334E3F] mt-1">
            Caso o sensor detecte alta temperatura ou fumaça, um alarme será disparado e o sistema enviará um alerta para o responsável.
            </p>
            </div>
          </div>

        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-xl font-bold text-[#6C8776]">
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
