import {BrowserRouter} from "react-router-dom";
import RouterPage from "./route/RouterPage";
import Navbar from "./components/Navbar/Navbar";

function App() {


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
