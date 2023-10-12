import apps from 'assets/images/apps.webp';
import AppButton from "../../components/AppButton";
import s from "./apps/Apps.module.scss";


function Apps() {
    return (
        <section className={s._}>
            <div className={s.apps_container} id="apps">
                <h3>У вас смартфон или планшет на Android или iOS?</h3>
                <p className="text">
                    Обязательно скачайте удобное приложение и играйте с другими людьми.</p>

                <div className={s.app_links}>
                    <AppButton type={'apple'}/>
                    <AppButton type={'google'}/>
                </div>
            </div>

            <div className={s.image_container}>
                <img src={apps} alt="devices"/>
            </div>
        </section>
    );
}

export default Apps;