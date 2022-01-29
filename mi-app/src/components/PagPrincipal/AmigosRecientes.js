import React from "react";
export default function AmigosRecientes(){
    return(
        <div className ="row">
                <div className ="col-12 col-md-4  recientes">
                    <div className ="card" style={{width: 18 + "rem"}}>
                        <div className ="card-header d-flex justify-content-between" className ="lupa">
                          <span>Amigos recientes</span> <a href=""><img src="../img/lupa.png" alt="Lupa" width="30px" /></a>
                        </div>
                        <ul className ="list-group list-group-flush">
                          
                        </ul>
                      </div>
                    </div>
        </div>
    )
}