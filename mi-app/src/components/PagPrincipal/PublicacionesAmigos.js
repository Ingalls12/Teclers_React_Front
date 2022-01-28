import React,{useEffect, useState} from "react";
import PublicacionModelo from "./PublicacionModelo";
export default function PublicacionesAmigos(){
    const [datos_publicacion,setDatos_publicacion] = useState([])
    useEffect(() => {
        const consigueInfoPublicaciones =async()=>{
         const datos = await fetch("http://localhost:8080/publicaciones",{
           headers:{'access-token':localStorage.getItem("token")}
         })
         const info = await datos.json();
        
         return info
       }
       consigueInfoPublicaciones()
       .then(res=>{
      
         setDatos_publicacion(res.datos.reverse());
       })
     },[])
    const publicaciones = datos_publicacion.map((item)=>{
        return(
            <PublicacionModelo key={item.PublicationId} FirstName={item.FirstName}Content={item.Content} PublicationDate={item.PublicationDate}/>
        )
    })

    return(
    <div className="col-12 col-md-8 col-xl-8 contenido ">
        <div className="publicacion">
            {publicaciones}
        </div>
        
    </div>
    )
}