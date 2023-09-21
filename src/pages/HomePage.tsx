import About from "./home_page/About";
import Apps from "./home_page/Apps";
import Descriptions from "./home_page/Descriptions";
import Footer from "./home_page/Footer";
import Header from "./home_page/Header";
import s from './home_page/HomePage.module.scss';
import Terms from "./home_page/Terms";
import Tutorial from "./home_page/Tutorial";


function HomePage() {
    return (
        <div className={s._}>
            <Header/>
            <About/>
            <Descriptions/>
            <Apps/>
            <Tutorial/>
            <Footer/>
            <Terms/>
        </div>
    );
}

export default HomePage;