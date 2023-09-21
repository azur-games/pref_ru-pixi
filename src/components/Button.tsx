import classNames from "classnames";
import {PropsWithChildren} from "react";
import s from "./button/Button.module.scss";
import {ButtonProps} from "./button/ButtonTypes";


function Button({children, className, ...props}: PropsWithChildren<ButtonProps>) {
    return (
        <button
            className={classNames(s._, className)}
            {...props}
        >{children}
        </button>
    );
}

export default Button;