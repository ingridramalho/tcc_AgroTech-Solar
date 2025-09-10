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
          </div>
        </header>

        <main className="flex justify-center px-4 md:px-8 pb-12">
        <div className="bg-[#d7e9d7] w-full max-w-4xl p-6 md:p-10 rounded-3xl shadow-md">
          <div className="flex justify-center mb-6">
            <button className="bg-green-800 text-white px-8 md:px-10 py-2 rounded-full text-base md:text-lg font-semibold shadow">
              Referências
            </button>
          </div>

          <p className="text-justify leading-relaxed mb-6 text-sm md:text-base">
            A ineficiência no controle de luz, temperatura e irrigação em plantações são fatores que afetam diretamente a produtividade e o consumo de recursos naturais. O desperdício de água, o excesso de calor e a dependência de energia externa tornam a agricultura menos sustentável e mais onerosa. A falta de soluções acessíveis e automatizadas agrava esses desafios, dificultando a adaptação dos agricultores às mudanças climáticas e à necessidade de maior eficiência produtiva
          </p>

          <h2 className="font-bold text-gray-700 mb-3 text-sm md:text-base">
            Artigos científicos:
          </h2>

          <ul className="space-y-2 text-green-900 text-xs md:text-sm break-words">
            <li>
              <a href="http://revista.unipacto.com.br/index.php/multidisciplinar/article/view/2907" className="hover:underline" target="_blank">
                http://revista.unipacto.com.br/index.php/multidisciplinar/article/view/2907
              </a>
            </li>
            <li>
              <a href="https://www.scielo.br/j/cr/a/dWYKgtvKthbcnWFFpVmjH3k/" className="hover:underline" target="_blank">
                https://www.scielo.br/j/cr/a/dWYKgtvKthbcnWFFpVmjH3k/
              </a>
            </li>
            <li>
              <a href="https://repositorio.utfpr.edu.br/jspui/bitstream/1/7470/3/CP_COAUT_2015_1__05.pdf" className="hover:underline" target="_blank">
                https://repositorio.utfpr.edu.br/jspui/bitstream/1/7470/3/CP_COAUT_2015_1__05.pdf
              </a>
            </li>
            <li>
              <a href="https://www.sustentere.inf.br/index.php/rica/article/view/5829" className="hover:underline" target="_blank">
                https://www.sustentere.inf.br/index.php/rica/article/view/5829
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
    )
}