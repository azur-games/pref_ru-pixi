import classNames from "classnames";
import s from "./footer/Footer.module.scss";


function Footer() {
    return (
        <footer className={s._}>
            <div className={classNames(s.container, 'wrapper')}>
                <h2 className="title">Реквизиты</h2>
                <p>
                    ООО «АЗУР ГЕЙМС»
                    <br/>
                    ИНН 9710014438
                    <br/>
                    ОГРН 1167746650081
                    <br/>
                    Юридический адрес: 123022 Москва, Столярный
                    <br/>
                    пер 3к14
                    <br/>
                    Support@azurgames.com
                </p>
            </div>
        </footer>
    );
}

export default Footer;