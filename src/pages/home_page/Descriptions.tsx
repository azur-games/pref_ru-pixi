import {ReactComponent as CalcIcon} from 'assets/icons/descriptions/calc.svg';
import {ReactComponent as LockIcon} from 'assets/icons/descriptions/lock.svg';
import {ReactComponent as MessageIcon} from 'assets/icons/descriptions/message.svg';
import {ReactComponent as UserIcon} from 'assets/icons/descriptions/user.svg';
import {TDescriptionItem} from "./descriptions/description_item/DescriptionItemTypes";
import DescriptionItem from "./descriptions/DescriptionItem";
import s from "./descriptions/Descriptions.module.scss";


const items: TDescriptionItem[] = [
    {
        icon: <CalcIcon/>,
        title: 'АВТОМАТИЧЕСКИЙ ПОДСЧЕТ',
        text: 'После партии в преферанс не тратьте драгоценное время роспись пули! В игру встроен автоматический подсчет результатов по окончании партии.'
    },
    {
        icon: <UserIcon/>,
        title: 'БЕЗ РЕГИСТРАЦИИ',
        text: 'Вам не потребуется заводить никакие новые аккаунты, чтобы начать играть в эту увлекательную карточную игру.'
    },
    {
        icon: <MessageIcon/>,
        title: 'БЕЗ БОТОВ',
        text: 'Играйте в классическую карточную игру онлайн с реальными людьми со всего мира. Общайтесь в чате, обменивайтесь эмоциями и заводите новых друзей!'
    },
    {
        icon: <LockIcon/>,
        title: 'ПРИВАТНЫЕ СТОЛЫ',
        text: 'Создайте новую игру, установите пароль и пригласите друзей расписать пулю в сочинку онлайн!'
    },
];

function Descriptions() {
    return (
        <section className={s._}>
            <ul className={s.list}>
                {items.map((item: TDescriptionItem) =>
                    <DescriptionItem key={item.title} item={item}/>
                )}
            </ul>
        </section>
    );
}

export default Descriptions;