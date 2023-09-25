import classNames from "classnames";
import Burger from "../../components/Burger";
import useNav from "./nav/_hooks/useNav";
import s from "./nav/Nav.module.scss";
import {UseNav} from "./nav/NavTypes";


function Nav() {
    let {isActive, onClickBurger}: UseNav = useNav();

    return (
        <div className={classNames(s._, isActive && s.active)}>
            <div className={s.logo_container}>
                <a href="/">
                    <img src="assets/icons/logo.png" className={s.logo} alt="logo"/>
                </a>
            </div>

            <nav className={s.nav}>
                <ul>
                    <li><a href="/play">Играть</a></li>
                    <li><a onClick={onClickBurger} href="#apps">Скачать</a></li>
                    <li><a onClick={onClickBurger} href="#section-tutorial">Обучение</a></li>
                    <li><a onClick={onClickBurger} href="#section-about">О нас</a></li>
                </ul>
                <Burger
                    className={classNames(s.burger, s.burger_in_nav)}
                    isActive={isActive}
                    onClick={onClickBurger}
                />
            </nav>

            <Burger
                className={s.burger}
                isActive={isActive}
                onClick={onClickBurger}
            />
        </div>
    );
}

export default Nav;