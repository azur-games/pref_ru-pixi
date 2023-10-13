import Button from "../../components/Button";
import onPlay from "../../utils/onPlay";
import s from './header/Header.module.scss';


function Header() {
    return (
        <header className={s._}>
            {/*<video*/}
            {/*    className={s.video}*/}
            {/*    src="assets/video/PREF_vid002_01_1920х1080_32s_ru.webm"*/}
            {/*    controlsList="nodownload"*/}
            {/*    autoPlay*/}
            {/*    muted*/}
            {/*    loop*/}
            {/*/>*/}

            <p className={s.description}>Онлайн игра</p>
            <h1 className={s.title}>Преферанс: <br/> игра в карты</h1>

            <div className={s.buttons}>
                <Button onClick={onPlay} className={s.button} playButton>
                    Играть онлайн
                </Button>
                <Button onClick={onPlay} className={s.button}>
                    Скачать приложение
                </Button>
            </div>
        </header>
    );
}

export default Header;