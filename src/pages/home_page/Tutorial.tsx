import classNames from "classnames";
import s from "./tutorial/Tutorial.module.scss";


function Tutorial() {
    return (
        <section className={s._} id="section-tutorial">
            <div className={classNames(s.container, 'wrapper')}>
                <div className={s.text_container}>
                    <h2 className={classNames(s.title, 'title')}>
                        Видео-обучение</h2>
                    <p className={'text-default'}>
                        Карточные Игры Преферанс Обучение / Правила Игры в Преферанс</p>
                </div>

                <div className={s.video_container}>
                    <video
                        className="elementor-video"
                        controls
                        src="assets/video/how_to_play.mp4"
                        controlsList="nodownload"
                        poster="assets/images/Преферанс-1.png"
                    />
                </div>
            </div>
        </section>
    );
}

export default Tutorial;