import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
  const navigate = useNavigate()
  const [formRegister, setFormRegister] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    contraseña: "",
    ciudad: "",
    pais: "",
    condiciones: false,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    //Verifico que todos los campos de mi formulario
    for (const prop in formRegister){
      let valorProp = formRegister[prop]
      if(valorProp===null || valorProp===""){
        alert("Porfavor llena todos los campos")
        return false
      
      }
    }
    if( !(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(formRegister.email)) ){
      alert("El correo introducido no es valido, intentalo otra vez")
      return false
    
    }else if(formRegister.condiciones===false){
      alert("Acepta las condiciones para continuar")
      return false
    }
    const res = await fetch(`http://localhost:8080/crear_usuarios`, {
                    method: "POST", 
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      "Username":formRegister.email,
                      "LastName":formRegister.apellidos,
                      "FirstName":formRegister.nombre,
                      "Password":formRegister.contraseña,
                      "Country":formRegister.pais,
                      "City":formRegister.ciudad
                    }),
                    mode: 'cors' 
                })
      const respuesta = await res.json()
      console.log(respuesta);
      localStorage.setItem('token', respuesta.token);
      localStorage.setItem('usuario',respuesta.usuario);
      localStorage.setItem("Id",respuesta.usuarioID);
      localStorage.setItem("Logged",respuesta.Logged);
      navigate("/PagPrincipal")
                
  }
  function handleChange(event){
    let {name,type,value,checked} = event.target;
    setFormRegister(prevRegisterForm=>({
      ...prevRegisterForm,
      [name]: type === "checkbox" ? checked : value
    }))
  }
  return (
    <div
      className="modal fade"
      id="modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Crear una nueva cuenta
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
           {/*  Empieza form */}
            <form
              className="row g-3 "
              id="form-usuario-nuevo"
              onSubmit={handleSubmit}
            >
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  ¿Cuál es tu nombre?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="nombre"
                  value={formRegister.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLastname" className="form-label">
                  ¿Cuál es tu apellido?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastname"
                  name="apellidos"
                  value={formRegister.apellidos}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputNewEmail" className="form-label">
                  Correo electrónico o Usuario
                </label>
                <input
                  type="email"
                  className="form-c ontrol"
                  id="inputNewEmail"
                  name="email"
                  value={formRegister.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputNewPassword" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputNewPassword"
                  name="contraseña"
                  value={formRegister.contraseña}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  Ciudad
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="ciudad"
                  value={formRegister.ciudad}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCountry" className="form-label">
                  Pais
                </label>
                <select
                  id="inputCountry"
                  className="form-select"
                  name="pais"
                  value={formRegister.pais}
                  onChange={handleChange}
                >
                  <option value="">Elige un país:</option>
                  <option value="argentina">Argentina</option>
                  <option value="colombia">Colombia</option>
                  <option value="mexico">México</option>
                </select>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    name="condiciones"
                    value={formRegister.condiciones}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Marca esta casilla si estas de acuerdo con los terminos y
                    condiciones de Teclers
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  id="crear-usuario"
                  className="btn btn-primary"
                >
                  Crear cuenta de usuario
                </button>
              </div>
            </form>
            {/*  <!--Termina form nuevo usuario--> */}
          </div>
        </div>
      </div>
    </div>
  );
}
