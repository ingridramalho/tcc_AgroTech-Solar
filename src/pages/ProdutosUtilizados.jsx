import { Header } from "../components/Header";

export function ProdutosUtilizados() {
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


        <div className="flex items-center space-x-8 text-[#334E3F] font-medium">
          <a href="#" className="hover:underline">Guia</a>
          <a href="#" className="hover:underline">Produtos</a>
          <a href="#" className="hover:underline">Quem somos</a>
          <a href="#" className="hover:underline">Referências</a>
          <a href="#" className="hover:underline">Jogo</a>

          <button className="w-10 h-5 bg-gray-200 rounded-full relative">
            <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow"></span>
          </button>
        </div>
        </header>

      <main className="flex-1 flex flex-col items-center px-6 md:px-20">
        
        <h2 className="text-2xl font-bold text-[#334E3F] mb-10 mt-20">
          Produtos <span className="font-semibold text-[#6C8776]"> Utilizados</span >
        </h2>

        <div className="space-y-5 w-full max-w-2xl">

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/esp32.png" alt="ESP32" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Placa de Desenvolvimento ESP32 – <span className="font-bold">R$ 49,90</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/rele.png" alt="Relé" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Módulo Relé 5V – <span className="font-bold">R$ 15,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/ina219.png" alt="INA219" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Módulo INA219 – <span className="font-bold">R$ 35,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/sensor-umidade.png" alt="Sensor Umidade" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Sensor de Umidade do Solo – <span className="font-bold">R$ 15,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/controlador-solar.png" alt="Controlador Solar" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Controlador de Carga Solar – <span className="font-bold">R$ 120,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/dc-dc.png" alt="DC-DC" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Conversor DC-DC – <span className="font-bold">R$ 80,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/microventilador.png" alt="Ventilador" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Microventilador 12V – <span className="font-bold">R$ 30,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] px-4 py-3 rounded-xl shadow-md">
            <img src="/mangueira.png" alt="Mangueira" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] font-medium">
              Mangueira fina para irrigação – <span className="font-bold">R$ 20,00</span>
            </p>
          </div>
        </div>

        <div className="text-center mb-10 mt-30">
          <h3 className="text-xl font-bold text-[#334E3F]">
            Projeto <span className="font-normal mb-10 mt-25">AgroTech Solar</span>
          </h3>
          <p className="text-lg font-bold text-[#334E3F] mt-2">
            Valor Final: <span className="font-semibold">364,90</span>
          </p>
        </div>
      </main>
    </div>
    );
}