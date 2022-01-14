import React,{useState} from "react";
export default function Navbar({logo}){
    const [buscador, setBuscador] = useState("")
    function handleChange(event){
        const {value} = event.target;
        setBuscador(value)
    }
    async function handleSubmit(event){
        event.preventDefault();
        const res = await fetch(`http://localhost:8080/usuarios`, {
                    method: "POST", 
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({FirstName:buscador}),
                    mode: 'cors' 
                });
                const respuesta = await res.json(); 
    }
    return(
        <nav className ="navbar navbar-light sticky-top">
        <div className ="container-fluid  d-flex justify-content-between">
            <div className ="row">
                <div className ="logo col-4">
                    <a className ="navbar-brand" href="#">
                        <img src={logo} alt="" width="40" height="40" className ="d-inline-block align-text-center rounded-circle"/>
                        Teclers
                    </a>
                </div>
                <div className ="col-6">
                    <form className ="d-flex" onSubmit={handleSubmit}>
                        <input className ="form-control me-2" type="search" place-holder="Search" aria-label="Search" name="buscador" onChange={handleChange} value={buscador}/>
                        <button className ="btn " type="submit">Search</button>
                    </form>
                </div>
                
            </div>
            <div id="pefil">
                <a href="./perfil.html"><img src="../img/perfil_2.jpg" alt="foto" className ="border 
                    border-secondary  border-3 rounded-circle" width="50px" height="50px"/> </a>
            </div>
            <div className ="col hamburguesa">
                <button className ="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                  </button>
            </div>
        </div>
    </nav>
    )
}