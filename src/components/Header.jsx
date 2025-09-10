import { Link } from "react-router"

import { MoonStarsIcon } from "@phosphor-icons/react"

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
          
                    <li>
                        <Link to="/guiautilização">Guia Utilização</Link>
                    </li>

                    <li>
                        <Link to="/produtosutilizados">Produtos Utilizados</Link>
                    </li>

                    <li>
                        <Link to="/apresentaçãojogo">ApresentaçãoJogo</Link>
                    </li>

                    <li>
                        <Link to="/quemsomos">QuemSomos</Link>
                    </li>
                    
                    <li> 
                        <Link to="/referencias">Referencias</Link>
                    </li>
                </ul>
            </nav>

            <button>
                <MoonStarsIcon size={32} weight="fill" />
            </button>
        </header>
    )
}