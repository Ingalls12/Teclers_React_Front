import * as type from "./userType";
export default function usuarioReducer(state = {},action){
    switch(action.type){
        case type.LOGIN:
            return action.payload;
        case type.LOGOUT:
            localStorage.clear()
            return {};
        case type.UPDATE:
            return action.payload;
        default:
            return state;
    }
}