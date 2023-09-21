import classNames from "classnames";
import {MouseEvent, PropsWithChildren} from "react";
import s from "./button/Button.module.scss";
import {ButtonProps} from "./button/ButtonTypes";


function Button({children, href, className, ...props}: PropsWithChildren<ButtonProps>) {

    function onClick(e: MouseEvent<any>): void {
        if (props.onClick) {
            props.onClick(e);
        }
        if (href) {
            window.open(href, '_self');
        }
    }

    return (
        <button
            className={classNames(s._, className)}
            onClick={onClick}
            {...props}
        >{children}
        </button>
    );
}

export default Button;