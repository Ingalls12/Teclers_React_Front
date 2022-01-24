import React from "react";
export default function CardUsuario(props){
    async function addAmigos(){
       
    }
    return(
        <div className ="card">
                    <img src="../img/sonriendo_perfil.jpg" alt=""/>
                    <div className ="container">
                            <h4 style={{color: "black"}}><b>{props.FirstName}</b></h4>
                            <p>{props.Username}</p>
                            <button onClick={addAmigos}>Agregar</button>
                    </div>
        </div>
    )
}