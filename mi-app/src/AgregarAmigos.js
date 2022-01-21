import React from "react";
import NavBarAmigos from "./components/AgregarAmigos/NavBarAmigos";
import ContenedorAmigos from "./components/AgregarAmigos/ContenedorAmigos"
import "./styles/agregarAmigos.css"
export default function AgregarAmigos(){
    return(
       <>
            <NavBarAmigos/>
            <ContenedorAmigos/>
       </>
    )
}