import devices from 'assets/images/devices.webp';
import classNames from "classnames";
import s from "./apps/Apps.module.scss";


function Apps() {
    return (
        <section className={s._}>
            <div className={classNames(s.container, "wrapper")}>

                <div className={s.image_container}>
                    <img src={devices} alt="devices"/>
                </div>

                <div className={s.apps_container}>
                    <h2 className="title">
                        У вас смартфон или планшет <br/> на Android или iOS?</h2>
                    <p className="text-default">
                        Обязательно скачайте удобное приложение и играйте с другими людьми.</p>

                    <div className={s.app_links}>
                        <a target="_blank" href="https://apps.apple.com/ru/app/%D0%BF%D1%80%D0%B5%D1%84%D0%B5%D1%80%D0%B0%D0%BD%D1%81-%D0%B8%D0%B3%D1%80%D1%8B-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1567727226">
                            <img src="assets/images/app_store.webp" alt="app_store"/>
                        </a>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.dp.preferance">
                            <img src="assets/images/google_play.webp" alt="google_play"/>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Apps;