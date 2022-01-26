import React from "react";
export default function BuscarAmigos(props){
    /* function setSearch(event) {
        setSearchbar(event.target.value)}
    } */
    return(
        <div className ="buscar_amigos">
                <h2 className ="h_amigos">Amigos que quiza conozcas</h2>
                <div className ="buscador">
                    <input type="text" placeholder="Nombre" />
                </div>
        </div>
    )
}