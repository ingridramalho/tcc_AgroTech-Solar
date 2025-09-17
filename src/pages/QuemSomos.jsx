import { Header } from "../components/Header";

export function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#F4F9F4]  dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-Montserrat font-bold">
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

      <section className="flex flex-col items-center py-10 mt-15">
      <h2 className="text-3xl font-poppins font-semibold text-[#6C8776] dark:text-[#EEF4EE] mb-20 mt-10">
      Quem <span className=" font-poppins font-semibold text-[#334E3F]"> somos?</span >
        </h2>
        <div className="flex gap-20">

          <div className="flex flex-col items-center text-center">
            <img src="foto-gaby.jpeg" alt="Gabrielly" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="text-[#334E3F] dark:text-[#334E3F] mt-4 font-poppins font-regular">Gabrielly Martins</p>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-semibold text-sm">@gabxtinz</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="foto-ingrid.jpeg" alt="Ingrid" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="text-[#334E3F] dark:text-[#334E3F] mt-4 font-poppins font-regular">Ingrid Ramalho</p>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-semibold text-sm">@ingrid_rsj</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="foto-duda.jpeg" alt="Eduarda" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="text-[#334E3F] dark:text-[#334E3F] mt-4 font-poppins font-regular">Mª Eduarda Bistaffa</p>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-semibold text-sm">@dudabistaffa</span>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center py-12 mb-30 mt-30">
        <h3 className="text-2xl font-poppins font-semibold text-[#6C8776] dark:text-[#EEF4EE] mb-7 mt-5">
          Entre em Contato
        </h3>
        <p className="text-[#6C8776] dark:text-[#334E3F] font-poppins font-regular mb-7 mt-5">
          Estamos prontos para te ajudar! Envie sua mensagem e responderemos o mais rápido possível.
        </p>


        <form className="flex flex-col items-center gap-4 w-full max-w-xl">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col flex-1">
              <label className="font-poppins font-medium text-[#45624E] dark:text-[#EEF4EE] bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] mb-1 mt-8">Nome</label>
              <input type="text"className="flex-1 p-3 rounded-lg  border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-poppins font-medium text-gray-600  dark:text-[#EEF4EE] mb-1 mt-8">Email</label>
              <input type="email"className="flex-1 p-3 rounded-lg border-gray-300 dark:text-[#6D8777] bg-[rgba(108,135,118,0.5)] dark:bg-[#6D8777] focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
          </div>

          <div className="flex flex-col w-full mb-10 mt-3">
            <label className="font-poppins font-medium text-gray-600  dark:text-[#EEF4EE] mb-1 mt-8">Assunto</label>
            <textarea
              className="w-full p-3 h-20 rounded-lg border-gray-300 dark:text-[#6D8777] bg-[rgba(108,135,118,0.5)] focus:outline-none focus:ring-2 focus:ring-green-300 resize-none mb-5"></textarea>
          </div>


          <button
            type="submit"
            className="bg-[rgba(108,135,118,0.5)] hover text-[#394931]  dark:text-[#EEF4EE] px-8 py-2 rounded-lg font-poppins font-regular transition mb-5">
            Enviar
          </button>
        </form>

        <div className="flex flex-col items-center mt-10">
          <p className="text-[#6C8776] dark:text-[#EEF4EE] mb-4 font-poppins font-semibold">Encontre-nos em</p>
          <div className="flex gap-6 text-gray-600 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram hover:text-green-600"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-twitter hover:text-green-600"></i>
            </a>

            <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook hover:text-green-600"></i>
            </a>
          </div>

          <div className="flex gap-8 mt-6">
            <img src="email.png" alt="logo1" className="rounded-lg shadow-md"/>
            <img src="instagram.png" alt="logo2" className="rounded-lg shadow-md"/>
            <img src="telefone.png" alt="logo3" className="rounded-lg shadow-md"/>
          </div>
        </div>
        <header className="w-full flex justify-between items-center px-4 md:px-16 py-3 md:py-6"></header>
      </section>
    </div>
  );
}
