import { Routes, Route, Router } from "react-router"
import { Home } from "../pages/Home"
import { GuiaUtilização } from "../pages/GuiaUtilização"
import { ProdutosUtilizados } from "../pages/ProdutosUtilizados"
import { ApresentaçãoJogo } from "../pages/ApresentaçãoJogo"
import { QuemSomos } from "../pages/QuemSomos"



export function AppRoutes() {
    return (
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/guiautilização" element={<GuiaUtilização />} />
        <Route path="/produtosutilizados" element={<ProdutosUtilizados />} />
        <Route path="/apresentaçãojogo" element={<ApresentaçãoJogo />} />
        <Route path="/quemsomos" element={<QuemSomos   />} />
     
      </Routes>

    )
}

