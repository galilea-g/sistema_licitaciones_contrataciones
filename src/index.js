import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import About from "./componentes/pages/about";
import home from "./componentes/pages/home"
import Contact from "./componentes/pages/contact";
import Catalogos from "./componentes/Catalogos/Catalogos"
import Dashboard from "./componentes/Admin/Dashboard/Dashboard"
import CatalogoAreas from "./componentes/Catalogos/Areas/Areas";
import CatalogoEtapas from "./componentes/Catalogos/Etapas/Etapas";
import Licitaciones from "./componentes/Licitaciones/Licitaciones"
import ParticularesIndex from "./componentes/Particulares/Particulares";
import RegistroParticulares from "./componentes/Particulares/Registro_particulares";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="areas" element={<CatalogoAreas />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalogos" element={<Catalogos />} />
        <Route path="login" element={<Dashboard />} />
        <Route path="areas" element={<CatalogoAreas />} />
        <Route path="etapas" element={<CatalogoEtapas />} />
        <Route path="licitaciones" element={<Licitaciones />} />
        <Route path="particulares" element={<ParticularesIndex />} />
        <Route path="registroparticulares" element={<RegistroParticulares />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


