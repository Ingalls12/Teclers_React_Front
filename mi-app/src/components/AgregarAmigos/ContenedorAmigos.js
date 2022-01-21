import React from "react";
import BuscarAmigos from "./BuscarAmigos";
import AmigosRecientes from "./AmigosRecientes"
import News from "./News"
let datos = [] 
export default function ContenedorAmigos(props){
    const amigos = datos.map(()=>{
        <div className ="card">
                <img src="../img/sonriendo_perfil.jpg" alt=""/>
                <div className ="container">
                        <h4 style="color: #fff;"><b>Erica Jones</b></h4>
                        <p>@Erica_J</p>
                        <button>Agregar</button>
                </div>
        </div>
    })
    return(
       <main>
            <News/>
            <div className ="contenedor_amigos">
                <BuscarAmigos />
                <div className ="cards_amigos">
                    
                </div>
            
            </div>
            <AmigosRecientes/>
       </main>
    )
}