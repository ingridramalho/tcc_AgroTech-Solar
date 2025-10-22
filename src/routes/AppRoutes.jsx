import { Routes, Route, Router } from "react-router"
import { Home } from "../pages/Home"
import { Guia } from "../pages/Guia"
import { Produtos } from "../pages/Produtos"
import { Jogo } from "../pages/Jogo"
import { Referencias } from "../pages/Referencias"
import { QuemSomos } from "../pages/QuemSomos"

export function AppRoutes() {
    return (
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/guia" element={<Guia />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
      </Routes>
    )
}

