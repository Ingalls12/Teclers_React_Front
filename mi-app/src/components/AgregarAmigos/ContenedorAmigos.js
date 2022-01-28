import React,{useEffect,useState} from "react";
import BuscarAmigos from "./BuscarAmigos";
import AmigosRecientes from "./AmigosRecientes"
import News from "./News"
import CardUsuario from "./CardUsuario"

export default function ContenedorAmigos(props){
    const [usuarios,setUsuarios] = useState([]);
    const [searchbar,setSearchbar] = useState("");
    useEffect(()=>{
        let url = "http://localhost:8080/usuarios"
        fetch(url)
            .then(response=>response.json()
            .then(data=>{
                
                setUsuarios(data.data);
                
            }))
        
    },[])

    const amigos = usuarios.filter((usuario)=>{
        if(searchbar == ""){
            return usuario
        }else if(usuario.FirstName.toLowerCase().includes(searchbar.toLowerCase())){
            return usuario;
        }
    }).map(usuario=>{
        return(
            <CardUsuario key={usuario.UserID} FirstName={usuario.FirstName} Username={usuario.Username} />
        )
    })
    
    return(
       <main className="principal">
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