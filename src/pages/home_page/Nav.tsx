import cn from "classnames";
import {useRef} from "react";
import {CSSTransition} from 'react-transition-group';
import Burger from "../../components/Burger";
import onPlay from "../../utils/onPlay";
import useNav from "./nav/_hooks/useNav";
import Menu from "./nav/Menu";
import s from "./nav/Nav.module.scss";
import {NavProps, UseNav} from "./nav/NavTypes";


function Nav({isShowNav}: NavProps) {
    let {isActive, onClickBurger}: UseNav = useNav();
    const menuRef = useRef();

    return (
        <>
            <CSSTransition
                in={isActive}
                classNames={'menu'}
                timeout={200}
                nodeRef={menuRef}
                unmountOnExit
            >
                <Menu ref={menuRef} isActive={isActive} onClickBurger={onClickBurger}/>
            </CSSTransition>


            <div className={cn(s._, !isShowNav && s.hidden)}>
                <div className={s.logo_container}>
                    <a href="/">
                        <img src="assets/icons/logo.png" className={s.logo} alt="logo"/>
                    </a>
                </div>

                <p className={s.play_mobile}>
                    <button type="button" onClick={onPlay}>Играть</button>
                </p>

                <Menu className={s.menu}/>

                <Burger
                    className={s.burger}
                    isActive={isActive}
                    onClick={onClickBurger}
                />
            </div>
        </>
    );
}

export default Nav;