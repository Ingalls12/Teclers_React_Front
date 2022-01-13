import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
export default function LogInForm(){
    const navigate = useNavigate()
    const [formInicio, setFormInicio] = useState(
        {
            correo: "",
            contraseña: ""
        }
    )
    function handleChange(event){
        const {name,value} = event.target;
        setFormInicio(prevForm => ({
            ...prevForm,
            [name]:value
        }))
    }

    async function handleSubmit(event){
        event.preventDefault()
        if (formInicio.correo===""||formInicio.contraseña===""){
            console.log("Por favor llena los campos")
        }else{
            let usuario = formInicio.correo
            let contrasena = formInicio.contraseña
            try {
                const res = await fetch(`http://localhost:8080/autenticar`, {
                    method: "POST", 
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({usuario: usuario, contrasena: contrasena}),
                    mode: 'cors' 
                });
                const respuesta = await res.json(); // tomo el JSON de la respuesta http
                
                
                if (respuesta.token){
                    console.log("Inicio de sesión exitoso")
                    console.log("se guardo el token")
                    localStorage.setItem('token', respuesta.token);
                    handleEnd()
                    
                }else{
                    alert("Por favor ingresa un usuario valido")
                }
            } catch(e) {
                console.error(e);   
            }
                
            }

    }
    function handleEnd(){
        if(localStorage.token){
            navigate("/PagPrincipal")
        }
    }

    
    return(
        <form className="col-lg-6" id="main_form" onSubmit={handleSubmit} >
          <div className="card">
            <h3 className="card-title">Iniciar sesión o crea una nueva cuenta</h3>
            <div className="form-floating">
              <input type="text" className="form-control" id="email" placeholder="name@example.com" name="correo" value={formInicio.correo} onChange={handleChange} />
              <label htmlFor="email">Correo electrónico</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" placeholder="Password" name="contraseña" value={formInicio.contraseña} onChange={handleChange} />
              <label htmlFor="password">Contraseña</label>
            </div>
            <button className="btn btn-primary col-4 mx-auto" type="submit" >Iniciar sesión</button>
            
            
            <button type="button" className="btn btn-primary col-4 mx-auto" data-bs-toggle="modal" data-bs-target="#modal"
              id="sign_up">Crear una nueva cuenta</button>
          </div>
        </form>
    )
}
