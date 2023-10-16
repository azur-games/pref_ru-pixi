import apple from 'assets/icons/apps/apple.png';
import google from 'assets/icons/apps/google.png';
import odnoclass from 'assets/icons/apps/odnoclass.png';
import ya_games from 'assets/icons/apps/ya_games.png';
import cn from "classnames";
import s from "./app_button/AppButton.module.scss";
import {AppButtonData, AppButtonProps, AppButtonVariant} from "./app_button/AppButtonTypes";


const variant: AppButtonVariant = {
    apple: {
        text: 'Download on the',
        name: 'App Store',
        iconSrc: apple,
        href: 'https://apps.apple.com/ru/app/%D0%BF%D1%80%D0%B5%D1%84%D0%B5%D1%80%D0%B0%D0%BD%D1%81-%D0%B8%D0%B3%D1%80%D1%8B-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1567727226"'
    },
    google: {
        text: 'GET IT ON',
        name: 'Google Play',
        iconSrc: google,
        href: 'https://play.google.com/store/apps/details?id=com.dp.preferance'
    },
    odnoclassniki: {
        text: 'найти в',
        name: 'Игры ОК',
        iconSrc: odnoclass,
        href: '#'
    },
    ya: {
        text: 'играть в',
        name: 'Яндекс Игры',
        iconSrc: ya_games,
        href: '#'
    },
};

function AppButton({type}: AppButtonProps) {
    const data: AppButtonData = variant[type];

    return (
        <a className={cn(s._, s[type])} href={data.href}>
            <img src={data.iconSrc} alt={data.name} className={s.icon}/>
            <div className={s.text}>
                <p className={s.text__text}>{data.text}</p>
                <p className={s.text__name}>{data.name}</p>
            </div>
        </a>
    );
}

export default AppButton;