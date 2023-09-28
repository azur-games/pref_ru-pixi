import macbook from 'assets/images/macbook_w.webp';
import classNames from "classnames";
import Button from "../../components/Button";
import onPlay from "../../utils/onPlay";
import s from "./about/About.module.scss";


function About() {
    return (
        <section className={s._} id="section-about">
            <div className={classNames(s.container, "wrapper")}>
                <img src={macbook} alt="macbook" className={s.image}/>

                <div className={s.text}>
                    <p>Преферанс – это классическая карточная игра, популярная среди игроков по всему миру.
                        Победа в преферанс всегда зависит от навыков игрока, а не от везения. Эта игра требует от игрока острого ума и хорошей памяти.</p>

                    <Button onClick={onPlay}>Играть онлайн</Button>
                </div>
            </div>
        </section>
    );
}

export default About;