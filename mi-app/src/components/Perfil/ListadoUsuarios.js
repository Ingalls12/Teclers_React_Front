import React from "react";

function ListadoUsuarios(){
    return(
        <div className="mt-5 card mb-0 mt-5 bg-info">
           <h6>Conecta con otros teclers: </h6> 

           <div>
               <p> {" "}
               <text>{"\n"} </text>
                   <span>  Juan -Front end </span>
                </p>  
                <p> {" "}
               <text>{"\n"} </text>
                   <span>  Pedro - Full stack </span>
                </p>  
           </div>
        </div>
    )
}
export default ListadoUsuarios;