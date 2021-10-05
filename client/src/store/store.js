import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {setLocalStorage} from "../utils/localStorage";


export const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)))


store.subscribe(() => {
    setLocalStorage("isAuth",store.getState().authReducer);
})
