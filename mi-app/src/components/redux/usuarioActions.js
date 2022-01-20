import * as type from "./userType";
function login(data){
    return {type:type.LOGIN,
            payload:data}
}

function logout(){
    return {type:type.LOGOUT}
}

function update(data){
    return {type:type.UPDATE,
            payload:data}
}

export {login, logout, update}