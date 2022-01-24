import React from "react";
export default function CardUsuario(props){
    
    return(
        <div className ="card">
                    <img src="../img/sonriendo_perfil.jpg" alt=""/>
                    <div className ="container">
                            <h4 style={{color: "black"}}><b>{props.FirstName}</b></h4>
                            <p>{props.Username}</p>
                            <button>Agregar</button>
                    </div>
        </div>
    )
}