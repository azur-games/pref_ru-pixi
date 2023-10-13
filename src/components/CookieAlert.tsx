import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import s from "./cookie_alert/CookieAlert.module.scss";
import {UseCookieAlert} from "./cookie_alert/CookieAlertTypes";
import useCookieAlert from "./cookie_alert/useCookieAlert";


function CookieAlert() {
    const {visible, onClick}: UseCookieAlert = useCookieAlert();

    return (
        <CSSTransition
            in={visible}
            classNames={'cookie'}
            timeout={300}
            unmountOnExit
        >
            <div className={s._}>
                <p className={s.text}>Мы используем файлы cookie, чтобы обеспечивать правильную работу нашего веб-сайта, персонализировать рекламные объявления и другие материалы, обеспечивать работу функций социальных сетей и анализировать сетевой
                    трафик. Мы также
                    предоставляем информацию об использовании вами нашего веб-сайта своим партнерам по социальным сетям, рекламе и аналитическим системам. Подробности в <Link to={'/cookie-policy'}>Политике использования файлов cookie</Link>.</p>

                <button
                    type="button"
                    className={s.button}
                    onClick={onClick}
                >
                    Понятно
                </button>
            </div>
        </CSSTransition>
    );
}

export default CookieAlert;