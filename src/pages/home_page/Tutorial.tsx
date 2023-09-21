import classNames from "classnames";
import s from "./tutorial/Tutorial.module.scss";


function Tutorial() {
    return (
        <section className={s._}>
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
                        src="https://pref.ru/wp-content/uploads/2021/12/Как-Играть-в-ПРЕФЕРАНС-_-Карточные-Игры-Преферанс-Обучение-_-Правила-Игры-в-Преф.mp4"
                        controlsList="nodownload"
                        poster="https://pref.ru/wp-content/uploads/2021/12/Преферанс-1.png"
                    />
                </div>
            </div>
        </section>
    );
}

export default Tutorial;