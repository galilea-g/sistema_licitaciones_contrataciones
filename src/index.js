import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

import Catalogos from "./componentes/Catalogos/Catalogos"
import Dashboard from "./componentes/Admin/Dashboard/Dashboard"
import CatalogoEtapas from "./componentes/Catalogos/Areas/Areas";




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="catalogos" element={<Catalogos />} />
        <Route path="login" element={<Dashboard />} />
        <Route path="areas" element={<CatalogoEtapas />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


