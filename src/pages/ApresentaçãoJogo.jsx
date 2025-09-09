import { Header } from "../components/Header";

export function ApresentaçãoJogo() {
    return(
        <div className="min-h-screen bg-[#F4F9F4] flex flex-col font-sans">
            <header className="w-full flex justify-between items-center px-16 py-6">

                <div className="flex items-center"> 
                  <img src="/logo.png" alt="AgroTech Solar" className="h-18" />
                  <div className="flex flex-col leading-tight -ml-4">
                   <span className="text-[#334E3F] font-poppins font-extrabold text-2xl mb-0.1">AgroTech</span>
                   <span className="text-[#6C8776] font-poppins font-extrabold text-xl self-end">Solar</span>
                 </div>
             </div>

             <nav className="flex items-center space-x-8 text-lg font-semibold text-[#2f4f2f]">
          <a href="#guiainstruções" className="hover:underline">Guia</a>
          <a href="#produtos" className="hover:underline">Produtos</a>
          <a href="#quemsomos" className="hover:underline">Quem somos</a>
          <a href="#referência" className="hover:underline">Referência</a>
          <a href="#jogo" className="hover:underline">Jogo</a>

          {/* Toggle */}
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#2f4f2f]"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
          </div>
        </nav>

            </header>

            <main className="flex justify-center items-center px-6 py-12">
        <div className="bg-[rgba(108,135,118,0.5)] rounded-3xl p-5 md:p-25 max-w-6xl mx-auto">
          {/* Botão AgroGuardian */}
          <div className="flex justify-center">
            <button className="bg-[#334E3F] mb-10 p-5 text-white px-8 py-2 rounded-full font-poppins font-bold text-xl">
            AgroGuardian
           </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div>
              <h2 className="font-poppins font-bold mb-7 text-[#EEF4EE]">
                Missão Solar (Destaque para a proteção e tecnologia solar no
                campo e na floresta)
              </h2>
              <p className="text-[#45624E] font-poppins font-semibold mb-4">
                No Reino Verde, a natureza era cuidada por uma miniatura de
                lavoura automatizada, alimentada pelos poderosos Cristais
                Solares. Esse sistema mágico controlava a luz, a irrigação e a
                temperatura das plantações, mantendo tudo em equilíbrio.
              </p>
              <p className="text-[#45624E] font-poppins font-semibold mb-4">
                Mas tudo mudou quando os cristais foram roubados. O clima ficou
                instável, as colheitas começaram a falhar e a lavoura
                automatizada parou de funcionar.
              </p>
              <p className="text-[#45624E] font-poppins font-semibold">
                Agora, os jovens guardiões Lyra, Lucky e Finn precisam atravessar
                florestas, cavernas e montanhas para recuperar os cristais e
                restaurar o equilíbrio da agricultura mágica antes que seja
                tarde demais.
              </p>
            </div>

            {/* Imagem + Botão */}
            <div className="flex flex-col items-center space-y-6 gap-5">
              <img src="/jogo.png" alt="Personagens AgroGuardian" className="rounded-2xl w-full max-w-md w-60 h-60"/>
              <button className="bg-[#334E3F] text-white px-13 py-3 rounded-full font-poppins font-bold">
                Jogar
              </button>
            </div>
          </div>
        </div>
      </main>
        </div>
    );
}