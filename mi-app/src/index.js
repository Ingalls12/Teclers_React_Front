import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import LogIn from "./LogIn"
import PagPrincipal from "./PagPrincipal"


ReactDOM.render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<LogIn/>} exact/>
     <Route path="/PagPrincipal" element={<PagPrincipal/>}/>
   </Routes>
  </BrowserRouter>
 , document.getElementById('root')
);

