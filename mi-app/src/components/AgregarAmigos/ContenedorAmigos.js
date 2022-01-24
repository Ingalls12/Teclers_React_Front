import React,{useEffect,useState} from "react";
import BuscarAmigos from "./BuscarAmigos";
import AmigosRecientes from "./AmigosRecientes"
import News from "./News"
import CardUsuario from "./CardUsuario"

export default function ContenedorAmigos(props){
    const [usuarios,setUsuarios] = useState([])
    useEffect(()=>{
        let url = "http://localhost:8080/usuarios"
        fetch(url)
            .then(response=>response.json()
            .then(data=>{
                
                setUsuarios(data.data)
                
            }))
        
    },[])

    const amigos = usuarios.map(usuario=>{
        return(
            <CardUsuario key={usuario.UserID} FirstName={usuario.FirstName} Username={usuario.Username} />
        )
    })
    
    return(
       <main>
            <News/>
            <div className ="contenedor_amigos">
                <BuscarAmigos />
                <div className ="cards_amigos">
                    {amigos}
                </div>
            
            </div>
            <AmigosRecientes/>
       </main>
    )
}