import AppButton from "../../components/AppButton";
import s from "./apps_other/AppsOther.module.scss";


function AppsOther() {
    return (
        <section className={s._}>
            <div className={s.text_container}>
                <h4 className={s.title}>Также Играйте в преферанс на платформах: Яндекс Игры и игры в Одноклассниках</h4>
                <p className="text">Ищите и устанавливайте игру без дополнительных скачиваний.</p>
            </div>

            <div className={s.links_container}>
                <AppButton type={'ya'}/>
                <AppButton type={'odnoclassniki'}/>
            </div>

        </section>
    );
}

export default AppsOther;