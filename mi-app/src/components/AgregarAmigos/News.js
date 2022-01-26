import React from "react"
import { useNavigate } from "react-router-dom";
export default function News(){
    const navigate = useNavigate();
    return(
        
        <div className ="contenedor_news">
            <div className ="perfil_opciones">
                <a href="" className ="perfil" onClick={()=>{navigate("/Perfil")}}>
                    <img src="../img/perfil.jpg" alt=""/>
                    <h3>Perfil</h3>
                </a>
    
            </div>
        </div>
    )
}