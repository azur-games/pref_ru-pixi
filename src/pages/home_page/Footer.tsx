import cn from "classnames";
import {Link} from "react-router-dom";
import s from "./footer/Footer.module.scss";


function Footer() {
    return (
        <footer className={s._}>
            <div className={s.container}>

                <a className={s.logo} href="/">
                    <img src="assets/icons/logo2.png" alt="logo"/>
                </a>

                <div className={s.text_container}>
                    <div className={s.text}>
                        <p>Реквизиты:</p>
                        <p>ИНН 9710014438</p>
                        <p>ОГРН 1167746650081</p>
                    </div>

                    <div className={s.text}>
                        <p>Юридический адрес:</p>
                        <p>123022 Москва, Столярный пер 3к14</p>
                        <a href="mailto:support@azurgames.com">Support@azurgames.com</a>
                    </div>
                </div>
            </div>

            <hr className={s.hr}/>

            <div className={cn(s.text_container, s.down_container)}>
                <p>© AZUR GAMES</p>
                <Link to="/terms-of-use">Политика конфиденциальности</Link>
            </div>

        </footer>
    );
}

export default Footer;