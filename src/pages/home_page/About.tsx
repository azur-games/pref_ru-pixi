import macbook from 'assets/images/macbook.webp';
import cn from "classnames";
import Button from "../../components/Button";
import onPlay from "../../utils/onPlay";
import s from "./about/About.module.scss";


function About() {
    return (
        <section className={cn(s._)} id="about">
            <div className={s.container}>
                <img src={macbook} alt="macbook" className={s.image}/>

                <div className={s.text}>
                    <h3>Преферанс – это классическая карточная игра</h3>
                    <p className="text">
                        Она популярна среди игроков по всему миру. Победа в преферанс всегда зависит от навыков игрока, а не от везения. Эта игра требует от игрока острого ума и хорошей памяти.</p>

                    <div className={s.buttons}>
                        <Button onClick={onPlay} playButton size={'small'}>Играть онлайн</Button>
                        <Button href="#apps" size={'small'}>Скачать приложение</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;