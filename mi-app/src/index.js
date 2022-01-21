import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './components/redux/store';
import LogIn from "./LogIn"
import PagPrincipal from "./PagPrincipal"
import Perfil from "./Perfil"
import AgregarAmigos from "./AgregarAmigos"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn/>} exact/>
      <Route path="/PagPrincipal" element={<PagPrincipal/>}/>
      <Route path="/Perfil" element={<Perfil/>}/>
      <Route path="/AgregarAmigos" element={<AgregarAmigos/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>
 , document.getElementById('root')
);

document.body.style.backgroundColor="#46D1E4"