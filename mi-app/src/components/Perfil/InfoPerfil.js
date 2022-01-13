import React from "react";
import Usuario from "./Usuario";

//Se declara la funcion Info perfil en donde se va a leer usuarios y setUsuarios(este para modificar) y de ahí se pasan a los componentes de usuario dentro del return
function InfoPerfil({usuarios, setUsuario, setEditar}) {

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

           {usuarios.map((usuario) =>(
               <Usuario
                    key={usuario.id}
                    usuario={usuario}
                    setUsuario={setUsuario}
                    setEditar={setEditar}
                />
           ))}
        </div>
    )
};
export default InfoPerfil;