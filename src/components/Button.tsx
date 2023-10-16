import {ReactComponent as ArrowIcon} from 'assets/icons/arrow_play.svg';
import cn from "classnames";
import {MouseEvent, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import s from "./button/Button.module.scss";
import {ButtonProps} from "./button/ButtonTypes";


function Button({children, href, className, size = 'big', playButton, ...props}: PropsWithChildren<ButtonProps>) {

    function onClick(e: MouseEvent<any>): void {
        if (props.onClick) {
            props.onClick(e);
        }
    }

    const classNames = cn(s._, className, s[size], playButton && s.play_button);

    const content = <>
        {children}
        {playButton && <ArrowIcon/>}
    </>;

    return (
        href ?
            <Link to={href} className={classNames} onClick={onClick}>
                {content}
            </Link>
            : <button className={classNames} onClick={onClick} {...props}>
                {content}
            </button>
    );
}

export default Button;