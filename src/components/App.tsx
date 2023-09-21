import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import TermsOfUse from "../pages/TermsOfUse";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'/terms_of_use'} element={<TermsOfUse/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;