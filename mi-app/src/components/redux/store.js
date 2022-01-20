import { combineReducers, createStore } from "redux";
import usuarioReducer from "./usuarioReducer";
const reducers = combineReducers({
    usuario: usuarioReducer
});
const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;