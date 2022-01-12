import React from "react";
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
}