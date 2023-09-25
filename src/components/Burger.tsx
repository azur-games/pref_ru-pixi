import classNames from "classnames";
import s from "./burger/Burger.module.scss";
import {BurgerProps} from "./burger/BurgerTypes";


function Burger({isActive, className, onClick}: BurgerProps) {

    return (
        <div className={classNames(s._, className, isActive && s.active)} onClick={onClick}>
            <div className={s.box}>
                <div className={s.inner}></div>
            </div>
        </div>
    );
}

export default Burger;