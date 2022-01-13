import React from "react";
import { useNavigate } from "react-router-dom";
import MainPrincipal from "./components/PagPrincipal/MainPrincipal";
import Navbar from "./components/PagPrincipal/NavBar";
import "./styles/index.css"
import logo from  "./img/tecla.jpg"
export default function PagPrincipal(){
    const navigate = useNavigate()
    if(localStorage.token){
        return(
            <>
                <Navbar logo={logo}/>
                <MainPrincipal/>
            </>
        )
    }else{
        navigate("/LogIn")
    }
   
}