import React from "react";
import MainPrincipal from "./components/PagPrincipal/MainPrincipal";
import Navbar from "./components/PagPrincipal/NavBar";
import "./styles/index.css"
export default function PagPrincipal(){
    return(
        <>
            <Navbar/>
            <MainPrincipal/>
        </>
    )
}