import React from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";
export default function LogInMain(){
    return(
        <>
            <div class="container index">
                <div class="row espacio"></div>
                <div class="inicia row align-items-center justify-content-center ">
                    <div class="col-lg-6 main_text">
                        <h1>Teclers</h1>
                        <h2> Nuestra red social para conectarse con profesores y compañeros de clases.</h2>
                    </div>
                </div>
            </div>
        <LogInForm/>
        <RegisterForm/>
        </>
    )
}