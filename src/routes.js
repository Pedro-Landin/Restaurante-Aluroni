import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Cardapio from "pages/Caradapio";
import Sobre from "pages/Sobre";
import Inicio from "pages/inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {

  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
