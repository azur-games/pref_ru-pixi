import About from "./home_page/About";
import Apps from "./home_page/Apps";
import AppsOther from "./home_page/AppsOther";
import Descriptions from "./home_page/Descriptions";
import Header from "./home_page/Header";
import s from './home_page/HomePage.module.scss';


function HomePage() {
    return (
        <div className={s._}>

            <picture className={s.picture}>
                <source srcSet="assets/images/header_mobile.webp" media="(max-width: 767px)"/>
                <img src="assets/images/header.webp" alt="header" className={s.image}/>
            </picture>

            <div className="wrapper">
                <Header/>
                <About/>
                <Descriptions/>
                <Apps/>
                <AppsOther/>
            </div>

            {/*<Tutorial/>*/}
            {/*<Footer/>*/}
            {/*<Terms/>*/}
        </div>
    );
}

export default HomePage;