import { Header } from "../components/Header";

export function QuemSomos() {
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


        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:underline">Guia</a>
          <a href="#" className="hover:underline">Produtos</a>
          <a href="#" className="hover:underline">Quem somos</a>
          <a href="#" className="hover:underline">Referências</a>
          <a href="#" className="hover:underline">Jogo</a>
        </nav>
        
      </header>

      <section className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Quem somos?</h2>
        <div className="flex gap-20">

          <div className="flex flex-col items-center text-center">
            <img src="foto-gaby.jpeg" alt="Gabrielly" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="mt-4 font-semibold">Gabrielly Martins</p>
            <span className="text-gray-500 text-sm">@gabxtinz</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="foto-ingrid.jpeg" alt="Ingrid" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="mt-4 font-semibold">Ingrid Ramalho</p>
            <span className="text-gray-500 text-sm">@ingrid_rsj</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="foto-duda.jpeg" alt="Eduarda" className="w-44 h-44 object-cover rounded-2xl shadow-lg"/>
            <p className="mt-4 font-semibold">Mª Eduarda Bistaffa</p>
            <span className="text-gray-500 text-sm">@dudabistaffa</span>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center py-12">
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          Entre em Contato
        </h3>
        <p className="text-gray-600 mb-10 text-center max-w-xl">
          Estamos prontos para te ajudar! Envie sua mensagem e responderemos o mais rápido possível.
        </p>


        <form className="flex flex-col items-center gap-4 w-full max-w-xl">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col flex-1">
              <label className="text-sm text-gray-600 mb-1">Nome</label>
              <input type="text"className="flex-1 p-3 rounded-lg border border-gray-300 bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input type="email"className="flex-1 p-3 rounded-lg border border-gray-300 bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm text-gray-600 mb-1">Assunto</label>
            <textarea
              className="w-full p-3 h-20 rounded-lg border border-gray-300 bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"></textarea>
          </div>


          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold transition">
            Enviar
          </button>
        </form>

        <div className="flex flex-col items-center mt-10">
          <p className="text-gray-600 mb-4 font-medium">Encontre-nos em</p>
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
            <img src="instagram.png" alt="logo3" className="rounded-lg shadow-md"/>
          </div>
        </div>
      </section>
    </div>
  );
}
