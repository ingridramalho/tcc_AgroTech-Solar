import { Header } from "../components/Header";

export function Referencias() {
  return (
    <div className="min-h-screen bg-[#F4F9F4] dark:bg-[rgba(108,135,118,0.5)] flex flex-col font-montserrat">

      <header className="w-full flex justify-between items-center px-4 md:px-16 py-3 md:py-6">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="AgroTech Solar"
            className="h-10 md:h-16"
          />
          <div className="flex flex-col leading-tight -ml-4">
            <span className="text-[#334E3F] font-poppins font-extrabold text-2xl">
              AgroTech
            </span>
            <span className="text-[#6C8776] dark:text-[#D4DDD2] font-poppins font-extrabold text-xl self-end">
              Solar
            </span>
          </div>
        </div>


        <button className="md:hidden text-[#334E3F] text-3xl w-full flex justify-center items-center">
          ☰
        </button>


        <nav className="hidden md:flex items-center space-x-8 -text-0.5xl font-Montserrat font-bold text-[#334E3F]">
          <Header />
        </nav>
      </header>


      <main className="flex flex-1 justify-center items-center px-4 py-10">
        <div className="bg-[#C7D6CC] dark:bg-[#6D8777] max-w-4xl w-full rounded-xl shadow-md p-6 md:p-13">
          <h2 className="bg-[#334E3F] dark:bg-[#BFCFBB] text-[#EEF4EE] dark:text-[#45624E] text-center text-lg md:text-xl font-poppins font-extrabold rounded-full py-4 px-25 mb-15 w-fit mx-auto">
            Referências
          </h2>

          <p className="text-[#45624E] dark:text-[#EEF4EE] text-sm md:text-base font-poppins font-semibold leading-relaxed mb-8">
          A ineficiência no controle de luz, temperatura e irrigação em plantações são fatores que afetam diretamente a produtividade e o consumo de recursos naturais. O desperdício de água, o excesso de calor e a dependência de energia externa tornam a agricultura menos sustentável e mais onerosa. A falta de soluções acessíveis e automatizadas agrava esses desafios, dificultando a adaptação dos agricultores às mudanças climáticas e à necessidade de maior eficiência produtiva
          </p>

          <h3 className="text-[#EEF4EE] dark:text-[#45624E] font-poppins text-3.5xl font-extrabold mb-8">
            Artigos científicos:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-[#334E3F] dark:text-[#EEF4EE] text-sm md:text-base">
            <li>
              <a
                href="http://revista.unipacto.com.br/index.php/multidisciplinar/article/view/2907"
                className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                http://revista.unipacto.com.br/index.php/multidisciplinar/article/view/2907
              </a>
            </li>
            <li>
              <a
                href="https://www.scielo.br/j/cr/a/dWYKgtvKthbcnWFFpVmjH3k/"
                className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                https://www.scielo.br/j/cr/a/dWYKgtvKthbcnWFFpVmjH3k/
              </a>
            </li>
            <li>
              <a
                href="https://repositorio.utfpr.edu.br/jspui/bitstream/1/7470/3/CP_COAUT_2015_1_05.pdf"
                className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                https://repositorio.utfpr.edu.br/jspui/bitstream/1/7470/3/CP_COAUT_2015_1_05.pdf
              </a>
            </li>
            <li>
              <a
                href="https://www.sustenere.inf.br/index.php/rica/article/view/5829"
                className="underline text-[#45624E] dark:text-[#EEF4EE] font-poppins font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                https://www.sustenere.inf.br/index.php/rica/article/view/5829
              </a>
            </li>
          </ul>
        </div>

        
      </main>
      
    </div>
  );
}
