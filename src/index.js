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

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalogos" element={<Catalogos />} />
        <Route path="login" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


