import React from "react";
import Publicacion from "./Publicacion";
import AmigosRecientes from "./AmigosRecientes";
import PublicacionesAmigos from "./PublicacionesAmigos"
export default function MainPrincipal(){
    return(
        <main className ="container vh-100">
            <Publicacion/>
            <PublicacionesAmigos/>
            <AmigosRecientes/>
        </main>
    )
}