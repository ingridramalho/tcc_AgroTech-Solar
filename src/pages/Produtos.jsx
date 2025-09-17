import { Header } from "../components/Header";

export function Produtos() {
    return (
      <div className="font-poppins min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-Montserrat font-bold">
      <header className="w-full flex justify-between items-center px-16 py-6">

        <div className="flex items-center">
          <img src="/logo.png" alt="AgroTech Solar" className="h-18" />
          <div className="flex flex-col leading-tight -ml-4">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">Solar</span>
          </div>
        </div>
        <button className="md:hidden text-[#334E3F] text-3xl w-full flex justify-center items-center">
          ☰
        </button>

        <nav className="flex items-center space-x-8 -text-0.5xl font-Montserrat font-bold text-[#334E3F]">    
          
            <input type="checkbox" className="sr-only peer" />
            <Header />
          
         
        </nav>
        
        </header>

      <main className="flex-1 flex flex-col items-center px-6 md:px-40">
        
        <h2 className="text-4xl font-poppins font-semibold text-[#334E3F] dark:text-[#EEF4EE] mb-18 mt-25">
          Produtos <span className="font-poppins font-semibold text-[#6C8776] dark:text-[#334E3F]"> Utilizados</span >
        </h2>

        <div className="space-y-5 w-full max-w-2xl">

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/esp32.png" alt="ESP32" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Placa de Desenvolvimento ESP32 – <span className="text-[#334E3F] font-poppins font-bold">R$ 49,90</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/rele.png" alt="Relé" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Módulo Relé 5V – <span className="text-[#334E3F] font-poppins font-bold">R$ 15,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/ina219.png" alt="INA219" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins  font-light">
              Módulo INA219 – <span className="text-[#334E3F] font-poppins font-bold">R$ 35,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/sensor-umidade.png" alt="Sensor Umidade" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Sensor de Umidade do Solo – <span className="text-[#334E3F] font-poppins font-bold">R$ 15,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/controlador-solar.png" alt="Controlador Solar" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Controlador de Carga Solar – <span className="text-[#334E3F] font-poppins font-bold">R$ 120,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/dc-dc.png" alt="DC-DC" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Conversor DC-DC – <span className="text-[#334E3F] font-poppins font-bold">R$ 80,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/microventilador.png" alt="Ventilador" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Microventilador 12V – <span className="text-[#334E3F] font-poppins font-bold">R$ 30,00</span>
            </p>
          </div>

          <div className="flex items-center bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] px-4 py-3 rounded-xl shadow-md">
            <img src="/mangueira.png" alt="Mangueira" className="w-14 h-14 rounded-md mr-4" />
            <p className="text-[#EEF4EE] dark:text-[#D4DDD2] font-poppins font-light">
              Mangueira fina para irrigação – <span className="text-[#334E3F] font-poppins font-bold">R$ 20,00</span>
            </p>
          </div>
        </div>

        <div className="text-center mb-10 mt-25">
          <h3 className="text-xl font-poppins font-mixed text-[#6C8776] dark:text-[#EEF4EE]">
            Projeto <span className="font-poppins font-mixed mb-10 mt-25 text-[#334E3F]">AgroTech Solar</span>
          </h3>
          <p className="text-lg font-bold text-[#6C8776] dark:text-[#EEF4EE] mt-2">
            Valor Final: <span className="font-poppins font-bold dark:text-[#EEF4EE]">364,90</span>
          </p>
        </div>
       
      </main>
    </div>
    );
}

