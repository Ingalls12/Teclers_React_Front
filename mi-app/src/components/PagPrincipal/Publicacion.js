/* import React from "react";
export default function Publicacion(){
    return(
        <div className ="col-12 col-md-8 col-xl-8 contenido ">
                    <div className ="publicacion">
                        <div className ="card text-center">
                            <div className ="card-header d-flex">
                              <ul className ="nav nav-pills card-header-pills">
                                <li className ="nav-item">
                                  <a className ="card-image foto-perfil" href="#"><img src="../img/perfil_2.jpg" alt="foto" className ="border 
                                    border-secondary  border-3 rounded-circle"/></a>Que estas pensando el dia de hoy <span id="nombre"></span>?
                                </li>
                               
                              </ul>
                            </div>
                            <div className ="card-body">
                              <h5 className ="card-title nueva_publicacion">Nueva publicación</h5>
        
                              <a href="#" className ="btn ">Publicar</a>
                            </div>
                          </div>
                    </div>
        </div>
    )
} */


import React from "react";

import { useState, useEffect } from "react";

function Publicacion({ texto_publicacion }) {

  const [texto, setTexto] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {

    if (Object.keys(setTexto).length > 0) { setTexto(texto_publicacion.texto)}

  },[texto_publicacion])

  const [mostrar, setMostrar] = useState(true)

  const handleSubmit =(e) => {
    e.preventDefault();
    setMostrar(false);

    

    if([texto].includes("")){

      window.alert("No puedes publicar un post en blanco");

      setError(true);

      return;

    }

    setError(false)

    /*const generarId = () => {

      const random = Math.random().toString(36).substring(2);

      const fecha = Date.now().toString(36);

      return random +fecha

  }*/

    const cuerpoPublicacion = {texto, /*id:generarId()*/}

   /* if(cuerpoPublicacion.id){

      cuerpoPublicacion.id = texto_publicacion.id

      const actualizacionPublicación = texto_publicacion.map(publicacion => (publicacion.id===texto_publicacion.id ? cuerpoPublicacion : publicacion))

      setPublicacion(cuerpoPublicacion)

      setPublicacion({})

    } else {

      cuerpoPublicacion.id=generarId();

      setPublicacion([...texto_publicacion, cuerpoPublicacion])

    }

    setTexto("");*/

}

  return (

    <div className="col-12 col-md-8 col-xl-8 contenido ">

      <div className="publicacion">

        <div className="card text-center">

          <div className="card-header d-flex">

            <ul className="nav nav-pills card-header-pills">

              <li className="nav-item">

                <a className="card-image foto-perfil" href="#"><img src="../img/perfil_2.jpg" alt="foto" className="border 

                                    border-secondary  border-3 rounded-circle"/></a>Que estas pensando el dia de hoy <span id="nombre"></span>?

              </li>

            </ul>

          </div>

          <div className="card-body">

            <form className="form new_pub" type="POST" onSubmit={handleSubmit} >

              <input type="text" className="pub_body" id="txtPublicacion" value={texto} onChange={(e)=> setTexto(e.target.value)}></input>

              <button type="submit" className="btn btn-primary mb-2">Publicar</button>

            </form>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Publicacion;

