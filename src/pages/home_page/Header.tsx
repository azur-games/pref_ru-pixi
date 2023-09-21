import macbook from 'assets/images/macbook-1.webp';
import classNames from 'classnames';
import s from './header/Header.module.scss';


function Header() {
    return (
        <header className={s._}>
            <div className={classNames(s.container, 'wrapper')}>
                <h1 className={s.title}>Преферанс: игра в карты онлайн</h1>
                <button type="button" className={s.button}>ИГРАТЬ ОНЛАЙН</button>

                <img src={macbook} alt="macbook" className={s.image}/>
            </div>
        </header>
    );
}

export default Header;