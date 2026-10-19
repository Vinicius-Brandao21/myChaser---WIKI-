import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* A Home será renderizada no caminho principal "/" */}
          <Route index element={<Home />} />

          {/* Deixando as rotas futuras preparadas */}
          <Route path="personagens" element={<div className="text-center mt-10">Página de Personagens em construção</div>} />
          <Route path="mapas" element={<div className="text-center mt-10">Página de Mapas em construção</div>} />
          <Route path="eventos" element={<div className="text-center mt-10">Página de Eventos em construção</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}