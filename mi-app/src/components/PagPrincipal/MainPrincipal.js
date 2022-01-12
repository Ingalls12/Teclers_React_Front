import React from "react";
import Publicacion from "./Publicacion";
import AmigosRecientes from "./AmigosRecientes";
export default function MainPrincipal(){
    return(
        <main className ="container vh-100">
            <Publicacion/>
            <AmigosRecientes/>
        </main>
    )
}