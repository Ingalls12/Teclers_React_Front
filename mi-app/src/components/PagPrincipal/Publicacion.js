import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "../redux/usuarioActions";
export default function Publicacion({ texto_publicacion }) {
  const dispatch = useDispatch();
  const [publicaciones, setTexto] = useState({
    texto_publicacion: "",
  });
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(true)

  async function handleSubmit(e){
    e.preventDefault();
    setMostrar(false);
   
   

    setError(false);
    const res = await fetch(`http://localhost:8080/publicaciones`,{
      method: "POST",
      headers: { 'access-token':localStorage.getItem("token")},
      body: JSON.stringify({
      "UserID":localStorage.getItem("Id"),
      "Content": publicaciones.texto_publicacion,
      "PublicationDate": new Date()
    })})

}
  return (

    <div className="col-12 col-md-8 col-xl-8 contenido ">
      <div className="publicacion">
        <div className="card text-center">
          <div className="card-header d-flex">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="card-image foto-perfil" ><img src="../img/perfil_2.jpg" alt="foto" className="border 
                                    border-secondary  border-3 rounded-circle"/></a>Que estas pensando el dia de hoy <span id="nombre"></span>?
              </li>
            </ul>
          </div>
          <div className="card-body">
            <form className="form new_pub" type="POST" onSubmit={handleSubmit} >
              <input type="text" className="pub_body" id="txtPublicacion" value={publicaciones[texto_publicacion]} onChange={(e)=> setTexto(e.target.value)}></input>
              <button type="submit" className="btn btn-primary mb-2">Publicar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


