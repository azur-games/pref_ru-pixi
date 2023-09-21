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
                        <a href="#">
                            <img src="assets/images/app_store.webp" alt="app_store"/>
                        </a>
                        <a href="#">
                            <img src="assets/images/google_play.webp" alt="google_play"/>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Apps;