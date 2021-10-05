import {BrowserRouter} from "react-router-dom";
import RouterPage from "./route/RouterPage";
import Navbar from "./components/Navbar/Navbar";
import {useEffect} from "react";
import {check} from "./http/reqest";
import {useDispatch} from "react-redux";
import {logOut, sinUp} from "./store/actions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        check().then(data => {
            dispatch(sinUp());
        })
            .catch(() => dispatch(logOut()));


    }, [])

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <RouterPage/>
            </BrowserRouter>
        </div>
    );
}

export default App;
