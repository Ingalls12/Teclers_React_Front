import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import LogIn from "./LogIn"
import PagPrincipal from "./PagPrincipal"
import Perfil from "./Perfil"


ReactDOM.render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<LogIn/>} exact/>
     <Route path="/PagPrincipal" element={<PagPrincipal/>}/>
     <Route path="/Perfil" element={<Perfil/>}/>
   </Routes>
  </BrowserRouter>
 , document.getElementById('root')
);

document.body.style.backgroundColor="#46D1E4"