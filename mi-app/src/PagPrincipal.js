import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import MainPrincipal from "./components/PagPrincipal/MainPrincipal";
import Navbar from "./components/PagPrincipal/NavBar";
import "./styles/index.css"
import logo from  "./img/tecla.jpg"
export default function PagPrincipal(){
    const navigate = useNavigate()
    useEffect(()=>{
        //modal-backdrop fade show"
        let capa = document.querySelector(".modal-backdrop")
        if(capa){
            capa.remove()
        }
        
    },[])
    
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