import classNames from 'classnames';
import onPlay from "../../utils/onPlay";
import s from './header/Header.module.scss';


function Header() {
    return (
        <header className={s._}>
            <video
                className={s.video}
                src="assets/video/PREF_vid002_01_1920х1080_32s_ru.webm"
                controlsList="nodownload"
                autoPlay
                muted
                loop
            />
            <div className={classNames(s.container, 'wrapper')}>
                <h1 className={s.title}>Преферанс: игра в карты онлайн</h1>
                <button type="button" onClick={onPlay} className={s.button}><span>ИГРАТЬ ОНЛАЙН</span></button>
            </div>
        </header>
    );
}

export default Header;