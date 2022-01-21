import React from "react"
export default function News(){
    return(
        <div className ="contenedor_news">
            <div className ="perfil_opciones">
                <a href="" className ="perfil">
                    <img src="../img/perfil.jpg" alt=""/>
                    <h3>Perfil</h3>
                </a>
                <a href="" className ="perfil">
                    <img src="../img/amigos.png" alt=""/>
                    <h3>Amigos</h3>
                </a>
                <a href="" className ="perfil">
                    <img src="../img/grupos.png" alt=""/>
                    <h3>Grupos</h3>
                </a>
                <hr/>
                <a href="" className ="perfil">
                    <img src="../img/ajustes.png" alt=""/>
                    <h3>Ajustes</h3>
                </a>
            </div>
        </div>
    )
}