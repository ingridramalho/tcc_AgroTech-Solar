import { Link } from "react-router"

import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"


export function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark") {
            tagHTML.classList.add("dark")
            }
    }, [theme])
    
    return (
        <header className="flex justify-around items-center h-16 gap-18">
            <nav>
                <ul className="flex gap-24">
            
                    <li>
                        <Link to={"/"}>Home</Link>
                        
                    </li>
          
                    <li>
                        <Link to="/guia">Guia</Link>
                    </li>

                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>

                    <li>
                        <Link to="/jogo">Jogo</Link>
                    </li>

                    <li>
                        <Link to="/referencias">Referências</Link>
                    </li>

                    <li>
                        <Link to="/quemsomos">Quem somos</Link>
                    </li>

                

                   
                </ul>
            </nav>

            <button className="cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                {theme === "dark" ? (
                    <SunIcon size={32} weight="fill" />
                ) : ( 
                    <MoonStarsIcon size={32} weight="fill" />
                )} 
        </button>
        </header>
    )
}



