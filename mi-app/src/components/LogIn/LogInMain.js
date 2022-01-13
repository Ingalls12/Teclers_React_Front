import React from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";
export default function LogInMain(){
    
    return(
        <>
            <div className ="container index">
                <div className ="row espacio"></div>
                <div className ="inicia row align-items-center justify-content-center ">
                    <div className ="col-lg-6 main_text">
                        <h1>Teclers</h1>
                        <h2> Nuestra red social para conectarse con profesores y compañeros de clases.</h2>
                    </div>
                    <LogInForm/>
                    <RegisterForm/>
                </div>
            </div>
        
        </>
    )
}