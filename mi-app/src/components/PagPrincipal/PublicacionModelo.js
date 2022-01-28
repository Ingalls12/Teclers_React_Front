import React from "react";
export default function PublicacionModelo(props){
    let fecha = props.PublicationDate;
    
    return(
         
                <div className ="card text-center">
                    <div className ="card-header">
                        <image/>
                        {props.FirstName}
                    </div>
                    <div className ="card-body">
                        <p className ="card-text">{props.Content}</p>
                        <a  className ="btn btn-primary">Like</a>
                    </div>
                    <div className ="card-footer text-muted">
                        {fecha}
                    </div>
                </div>
       
    )
}