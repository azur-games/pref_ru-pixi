import {ButtonHTMLAttributes} from "react";


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
    href?: string
}