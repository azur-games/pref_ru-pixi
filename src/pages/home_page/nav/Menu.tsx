import cn from "classnames";
import {forwardRef, Ref} from "react";
import {Link} from "react-router-dom";
import onPlay from "../../../utils/onPlay";
import {MenuProps} from "./menu/MenuTypes";
import s from "./Nav.module.scss";


function Menu({className, isActive, onClickBurger}: MenuProps, ref: Ref<any>) {

    return (
        <>
            {isActive && <div className={s.overlay} onClick={onClickBurger}/>}
            <nav ref={ref} className={cn(s.nav, className)}>
                <ul>
                    <li>
                        <button type="button" onClick={onPlay}>Играть</button>
                    </li>
                    <li><Link onClick={onClickBurger} to="/#apps">Скачать</Link></li>
                    <li><Link onClick={onClickBurger} to="/#tutorial">Обучение</Link></li>
                    <li><Link onClick={onClickBurger} to="/#about">О нас</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default forwardRef(Menu);