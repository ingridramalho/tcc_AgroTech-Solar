import { Header } from "../components/Header";

export function Jogo() {
  return (
    <div className="min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-Montserrat font-sans">
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

      <main className="flex justify-center items-center px-6 py-12">
        <div className="bg-[#C7D6CC] dark:bg-[#6D8777] max-w-6xl w-full rounded-xl shadow-md p-5 md:p-15 mt-10 mb-15">

          <div className="flex justify-center">
            <button className="bg-[#334E3F] dark:bg-[#BFCFBB] mb-10 p-5 text-white dark:text-[#45624E] text-center text-lg md:text-2xl font-poppins font-extrabold rounded-full py-3 px-25  w-fit mx-auto">
              AgroGuardian
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center mb-15 mt-10">

            <div>
              <h2 className="font-poppins font-bold mb-7 text-[#EEF4EE] dark:text-[#45624E]">
                Missão Solar (Destaque para a proteção e tecnologia solar no
                campo e na floresta)
              </h2>
              <p className="text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold mb-4">
                No Reino Verde, a natureza era cuidada por uma miniatura de
                lavoura automatizada, alimentada pelos poderosos Cristais
                Solares. Esse sistema mágico controlava a luz, a irrigação e a
                temperatura das plantações, mantendo tudo em equilíbrio.
              </p>
              <p className="text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold mb-4">
                Mas tudo mudou quando os cristais foram roubados. O clima ficou
                instável, as colheitas começaram a falhar e a lavoura
                automatizada parou de funcionar.
              </p>
              <p className="text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold mt-5 mb-5">
                Agora, os jovens guardiões Lyra, Lucky e Finn precisam atravessar
                florestas, cavernas e montanhas para recuperar os cristais e
                restaurar o equilíbrio da agricultura mágica antes que seja
                tarde demais.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6 gap-5 mt-5">
              <img src="/jogo.png" alt="Personagens AgroGuardian" className="rounded-2xl  w-100 h-70" />
              <button className="bg-[#334E3F] dark:bg-[#BFCFBB] text-white dark:text-[#45624E] px-25 py-3 rounded-full font-poppins font-bold">
                Jogar
              </button>
            </div>
          </div>
        </div>
       
      </main>
    </div>
  );
}