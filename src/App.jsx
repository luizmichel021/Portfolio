import { useState } from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";

import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import {
  Ulheader,
  HeaderConteiner,
  Liheader,
  StyledLink,
} from "./components/style";
import { Globalstyle } from "./components/style";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderConteiner>
          <nav>
            <Ulheader>
              <Liheader>
                <StyledLink to="/">Incio</StyledLink>
              </Liheader>
              <Liheader>
                <StyledLink to="/sobre">Sobre</StyledLink>
              </Liheader>
              <Liheader>
                <StyledLink to="/projetos">Projetos</StyledLink>
              </Liheader>
            </Ulheader>
          </nav>
        </HeaderConteiner>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
      <Globalstyle />
    </>
  );
}

export default App;
