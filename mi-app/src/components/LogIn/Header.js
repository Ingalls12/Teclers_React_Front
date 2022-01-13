import React from "react";

export default function Header(props){
    const estilo = {
        backgroundColor:"#A070B7"
    }
    return(
        <header>
            <nav className ="navbar navbar-expand-lg navbar-dark" style={estilo}>
                <div className ="container-fluid justify-content-center">
                    <a className ="navbar-brand" href="#">
                        <img src={props.logo} alt="" width="40" height="40" className ="d-inline-block rounded-circle justify-content-center"/>
                        Teclers
                    </a>
                </div>
            </nav>
        </header>
    )
}