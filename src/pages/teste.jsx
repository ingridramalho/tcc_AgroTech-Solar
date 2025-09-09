import { Header } from "../components/Header";

export default function ApresentaçãoJogo() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <div className="min-h-screen bg-[#F4F9F4] flex flex-col font-sans">
        {/* Header */}
        <header className="w-full flex justify-between items-center px-6 md:px-16 py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="AgroTech Solar" className="h-12" />
            <div className="flex flex-col leading-tight -ml-2">
              <span className="text-[#334E3F] font-poppins font-extrabold text-xl md:text-2xl">
                AgroTech
              </span>
              <span className="text-[#6C8776] font-poppins font-extrabold text-lg md:text-xl self-end">
                Solar
              </span>
            </div>
          </div>
  
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-[#2f4f2f]">
            <a href="#guiainstruções" className="hover:underline">
              Guia
            </a>
            <a href="#produtos" className="hover:underline">
              Produtos
            </a>
            <a href="#quemsomos" className="hover:underline">
              Quem somos
            </a>
            <a href="#referência" className="hover:underline">
              Referência
            </a>
            <a href="#jogo" className="hover:underline">
              Jogo
            </a>
  
            {/* Toggle */}
            <div className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#2f4f2f]"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
            </div>
          </nav>
  
          {/* Botão Menu Mobile */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-[#2f4f2f]"></span>
            <span className="w-6 h-0.5 bg-[#2f4f2f]"></span>
            <span className="w-6 h-0.5 bg-[#2f4f2f]"></span>
          </button>
        </header>
  
        {/* Menu Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start bg-[#EAF3EA] px-6 py-4 space-y-3 font-semibold text-[#2f4f2f]">
            <a href="#guiainstruções" className="hover:underline w-full">
              Guia
            </a>
            <a href="#produtos" className="hover:underline w-full">
              Produtos
            </a>
            <a href="#quemsomos" className="hover:underline w-full">
              Quem somos
            </a>
            <a href="#referência" className="hover:underline w-full">
              Referência
            </a>
            <a href="#jogo" className="hover:underline w-full">
              Jogo
            </a>
          </div>
        )}
  
        {/* Main */}
        <main className="flex justify-center items-center px-4 md:px-6 py-8 md:py-12">
          <div className="bg-[rgba(108,135,118,0.5)] rounded-3xl p-5 md:p-16 max-w-6xl mx-auto">
            {/* Botão AgroGuardian */}
            <div className="flex justify-center">
              <button className="bg-[#334E3F] mb-10 p-4 md:p-5 text-white px-6 md:px-8 py-2 rounded-full font-poppins font-bold text-lg md:text-xl">
                AgroGuardian
              </button>
            </div>
  
            {/* Grid Responsivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Texto */}
              <div>
                <h2 className="font-poppins font-bold mb-7 text-[#EEF4EE] text-lg md:text-xl">
                  Missão Solar (Destaque para a proteção e tecnologia solar no
                  campo e na floresta)
                </h2>
                <p className="text-[#45624E] font-poppins font-semibold mb-4 text-sm md:text-base">
                  No Reino Verde, a natureza era cuidada por uma miniatura de
                  lavoura automatizada, alimentada pelos poderosos Cristais
                  Solares. Esse sistema mágico controlava a luz, a irrigação e a
                  temperatura das plantações, mantendo tudo em equilíbrio.
                </p>
                <p className="text-[#45624E] font-poppins font-semibold mb-4 text-sm md:text-base">
                  Mas tudo mudou quando os cristais foram roubados. O clima ficou
                  instável, as colheitas começaram a falhar e a lavoura
                  automatizada parou de funcionar.
                </p>
                <p className="text-[#45624E] font-poppins font-semibold text-sm md:text-base">
                  Agora, os jovens guardiões Lyra, Lucky e Finn precisam atravessar
                  florestas, cavernas e montanhas para recuperar os cristais e
                  restaurar o equilíbrio da agricultura mágica antes que seja
                  tarde demais.
                </p>
              </div>
  
              {/* Imagem + Botão */}
              <div className="flex flex-col items-center space-y-6">
                <img
                  src="/jogo.png"
                  alt="Personagens AgroGuardian"
                  className="rounded-2xl w-full max-w-xs md:max-w-md h-48 md:h-60 object-cover"
                />
                <button className="bg-[#334E3F] text-white px-10 py-3 rounded-full font-poppins font-bold text-base md:text-lg">
                  Jogar
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }