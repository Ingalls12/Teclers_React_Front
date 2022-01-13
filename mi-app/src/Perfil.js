import React from "react";
import {useState, useEffect} from "react";
import logo from "./img/tecla.jpg"
import Formulario from "./components/Perfil/Formulario";
import Header from "./components/Perfil/Header";
import InfoPerfil from "./components/Perfil/InfoPerfil";
import ListadoUsuarios from "./components/Perfil/ListadoUsuarios";
import "bootstrap/dist/css/bootstrap.min.css"



function Perfil() {
// Aquí tenemos el use state con el cual se modificaran usuarios (usuarios es el listado) que vaya teniendo el formulario
  const [usuarios, setUsuarios] = useState([]);

//Aquí tenemos el use state de usuario, con el cual se modificarán los valores dentro de usuario y en InfoPerfil dentro del return se encontrará el SetUsuario
  const [usuario, setUsuario] = useState({});

//Crear useState para editar
  const [editar, setEditar] = useState(false);


//Declaramos el useEffect que usamos para editar datos del usuario
  useEffect(()=>{
    if(usuario.length){
      usuario.editar=true
      console.log('PruebaXX')
      fetch()
    }
    setEditar(false)
  },[editar]);

//Dentro del return se coloca un condicional ternario con el cual al ingresar usuarios se muestra "Usuario capturado" y se deja de visualizar el formulario  

  return (
    <div className="container mx-auto mt-40">

      <div>
     <Header logo={logo}/>
     </div>

     <div className="d-flex justify-content-between">

        <Formulario className="p-2 bd-highlight"
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        usuario={usuario}
        setUsuario={setUsuario}
        />
          
          <div>        
          <InfoPerfil className="p-2 bd-highlight"
          usuarios={usuarios}
          setUsuario={setUsuario}
          setEditar={setEditar}
          />
          </div>  
         
          <div>  
          <ListadoUsuarios className="px-10 bd-highlight mt-5"/>
          </div>

     </div>

    </div>
  );
}

export default Perfil;