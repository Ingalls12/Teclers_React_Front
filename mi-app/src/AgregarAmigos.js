import React,{useEffect} from "react";
import NavBarAmigos from "./components/AgregarAmigos/NavBarAmigos";
import ContenedorAmigos from "./components/AgregarAmigos/ContenedorAmigos"
import "./styles/agregarAmigos.css"
export default function AgregarAmigos(){
    useEffect(()=>{

    },[])
    return(
       <>
            <NavBarAmigos/>
            <ContenedorAmigos/>
       </>
    )
}