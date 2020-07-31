import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home/index.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/Cadastro/Video";
import CadastroCategoria from "./pages/Cadastro/Categoria";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/' component={App} exact />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);
