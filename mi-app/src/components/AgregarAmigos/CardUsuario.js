import React,{useState} from "react";
export default function CardUsuario(props){
    const [solicitud,setSolicitud] = useState(false)
    async function addAmigos(event){
        
        setSolicitud(valorAntiguo=>!valorAntiguo)
        solicitud ?event.target.style.backgroundColor = "green":event.target.style.backgroundColor = "#46d1e4";
    }
    
    return(
        <div className ="card">
                    <img src="../img/sonriendo_perfil.jpg" alt=""/>
                    <div className ="container">
                            <h4 style={{color: "black"}}><b>{props.FirstName}</b></h4>
                            <p>{props.Username}</p>
                            <button  onClick={addAmigos}>{solicitud?"cancelar":"Agregar"}</button>
                    </div>
        </div>
    )
}