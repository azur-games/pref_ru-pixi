import Button from "../../components/Button";
import onPlay from "../../utils/onPlay";
import s from "./tutorial/Tutorial.module.scss";


function Tutorial() {
    return (
        <section className={s._} id="tutorial">
            <h2 className={s.title}>
                Видео-обучение</h2>
            <p className="text">
                Карточные Игры Преферанс Обучение / Правила Игры в Преферанс</p>

            <video
                className={s.video}
                controls
                src="assets/video/how_to_play.mp4"
                controlsList="nodownload"
                poster="assets/images/Преферанс-1.webp"
            />

            <Button onClick={onPlay} playButton className={s.button}>Играть онлайн</Button>
        </section>
    );
}

export default Tutorial;