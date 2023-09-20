import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'/terms_of_use'} element={<TermsOfUse/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;