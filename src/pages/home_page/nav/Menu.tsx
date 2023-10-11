import cn from "classnames";
import {forwardRef, Ref} from "react";
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
                    <li><a onClick={onClickBurger} href="#apps">Скачать</a></li>
                    <li><a onClick={onClickBurger} href="#section-tutorial">Обучение</a></li>
                    <li><a onClick={onClickBurger} href="#section-about">О нас</a></li>
                </ul>
            </nav>
        </>
    );
}

export default forwardRef(Menu);