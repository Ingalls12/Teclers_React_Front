import React,{useState} from "react";
export default function CardUsuario(props){
    const [solicitud,setSolicitud] = useState(false)
    async function addAmigos(event){
        
        setSolicitud(valorAntiguo=>!valorAntiguo)
        
    }
    return(
        <div className ="card">
                    <img src="../img/sonriendo_perfil.jpg" alt=""/>
                    <div className ="container">
                            <h4 style={{color: "black"}}><b>{props.FirstName}</b></h4>
                            <p>{props.Username}</p>
                            {solicitud?
                                <button style={{backgroundColor:"red"}} onClick={addAmigos}>{solicitud?"cancelar":"Agregar"}</button>:
                                <button style={{backgroundColor:"#77c8c9"}} onClick={addAmigos}>{solicitud?"cancelar":"Agregar"}</button>
                            }
                                
                    </div>
        </div>
    )
}
//#46d1e4