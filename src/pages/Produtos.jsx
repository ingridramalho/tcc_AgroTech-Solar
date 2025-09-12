import { Header } from "../components/Header";

export function Produtos() {
    return (
      <div className="min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-Montserrat font-bold">
      <header className="w-full flex justify-between items-center px-16 py-6">

        <div className="flex items-center">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18" />
          <div className="flex flex-col leading-tight -ml-4">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">Solar</span>
          </div>
        </div>

        <nav className="flex items-center space-x-8 text-lg font-Montserrat font-bold text-[#334E3F]">    
          
            <input type="checkbox" className="sr-only peer" />
            <Header />
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
         
        </nav>
        
        </header>

      <main className="flex-1 flex flex-col items-center px-6 md:px-20">
        
        <h2 className="text-2xl font-poppins  font-semibold text-[#334E3F] dark:text-[#EEF4EE] mb-10 mt-20">
          Produtos <span className="font-poppins font-semibold text-[#6C8776] dark:text-[#334E3F]"> Utilizados</span >
        </h2>

        <div className="space-y-5 w-full max-w-2xl">

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/esp32.png" alt="ESP32" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Placa de Desenvolvimento ESP32 – <span className="font-poppins font-mixed">R$ 49,90</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/rele.png" alt="Relé" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Módulo Relé 5V – <span className="font-poppins font-mixed">R$ 15,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/ina219.png" alt="INA219" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins  font-mixed">
              Módulo INA219 – <span className="font-poppins font-mixed">R$ 35,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/sensor-umidade.png" alt="Sensor Umidade" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Sensor de Umidade do Solo – <span className=" font-poppins font-mixed">R$ 15,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/controlador-solar.png" alt="Controlador Solar" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Controlador de Carga Solar – <span className="font-poppins font-mixed">R$ 120,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/dc-dc.png" alt="DC-DC" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Conversor DC-DC – <span className="font-poppins font-mixed">R$ 80,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/microventilador.png" alt="Ventilador" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Microventilador 12V – <span className="font-poppins font-mixed">R$ 30,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[#B4C8B4] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/mangueira.png" alt="Mangueira" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#334E3F] dark:text-[#D4DDD2] font-poppins font-mixed">
              Mangueira fina para irrigação – <span className="font-poppins font-mixed">R$ 20,00</span>
            </p>
          </div>
        </div>

        <div className="text-center mb-10 mt-30">
          <h3 className="text-xl font-poppins font-mixed text-[#6C8776]">
            Projeto <span className="font-poppins font-mixed mb-10 mt-25 text-[#334E3F]">AgroTech Solar</span>
          </h3>
          <p className="text-lg font-bold text-[#6C8776] dark:text-[#6C8776] mt-2">
            Valor Final: <span className="font-poppins font-mixed dark:text-[#6C8776]">364,90</span>
          </p>
        </div>
      </main>
    </div>
    );
}

