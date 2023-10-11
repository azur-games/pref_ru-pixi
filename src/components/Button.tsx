import {ReactComponent as ArrowIcon} from 'assets/icons/arrow_play.svg';
import cn from "classnames";
import {MouseEvent, PropsWithChildren} from "react";
import s from "./button/Button.module.scss";
import {ButtonProps} from "./button/ButtonTypes";


function Button({children, href, className, size = 'big', playButton, ...props}: PropsWithChildren<ButtonProps>) {

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
            className={cn(s._, className, s[size], {
                    [s.play_button]: playButton
                },
            )}
            onClick={onClick}
            {...props}
        >
            {children}
            {playButton && <ArrowIcon/>}
        </button>
    );
}

export default Button;