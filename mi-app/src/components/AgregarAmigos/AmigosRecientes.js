import React from "react";
export default function AmigosRecientes(){
    return(
        <div className ="contenedor_mensajes">
            <div className ="amigos_recientes">
                <h2>Amigos Recientes</h2>
                <hr/>
                <a href="" className ="perfil">
                    <img src="../img/perfil.jpg" alt=""/>
                    <h3>Amigo</h3>
                </a>
                <a href="" className ="perfil">
                    <img src="../img/perfil.jpg" alt=""/>
                    <h3>Amigo</h3>
                </a>
                <a href="" className ="perfil">
                    <img src="../img/perfil.jpg" alt=""/>
                    <h3>Amigo</h3>
                </a>
                <a href="" className ="perfil">
                    <img src="../img/perfil.jpg" alt=""/>
                    <h3>Amigo</h3>
                </a>
            </div>
        </div>
    )
}