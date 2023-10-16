import About from "./home_page/About";
import Apps from "./home_page/Apps";
import AppsOther from "./home_page/AppsOther";
import Descriptions from "./home_page/Descriptions";
import Header from "./home_page/Header";
import s from './home_page/HomePage.module.scss';
import Tutorial from "./home_page/Tutorial";


function HomePage() {
    return (
        <div className={s._}>

            <picture className={s.picture}>
                <source srcSet="assets/images/header_mobile.webp" media="(max-width: 767px)"/>
                <img src="assets/images/header.webp" alt="header" className={s.image}/>
            </picture>
            <img className={s.online_card} src="assets/images/online-card.webp" alt="online-card"/>

            <div className="wrapper">
                <Header/>
                <About/>
                <Descriptions/>
                <Apps/>
                <AppsOther/>
                <Tutorial/>
            </div>

        </div>
    );
}

export default HomePage;