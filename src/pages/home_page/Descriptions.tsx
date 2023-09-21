import classNames from "classnames";
import {TDescriptionItem} from "./descriptions/description_item/DescriptionItemTypes";
import DescriptionItem from "./descriptions/DescriptionItem";
import s from "./descriptions/Descriptions.module.scss";


let items: TDescriptionItem[] = [
    {
        title: 'АВТОМАТИЧЕСКИЙ ПОДСЧЕТ',
        text: 'После партии в преферанс не тратьте драгоценное время роспись пули! В игру встроен автоматический подсчет результатов по окончании партии.'
    },
    {
        title: 'БЕЗ РЕГИСТРАЦИИ',
        text: 'Вам не потребуется заводить никакие новые аккаунты, чтобы начать играть в эту увлекательную карточную игру.'
    },
    {
        title: 'БЕЗ БОТОВ',
        text: 'Играйте в классическую карточную игру онлайн с реальными людьми со всего мира. Общайтесь в чате, обменивайтесь эмоциями и заводите новых друзей!'
    },
    {
        title: 'ПРИВАТНЫЕ СТОЛЫ',
        text: 'Создайте новую игру, установите пароль и пригласите друзей расписать пулю в сочинку онлайн!'
    },
];

function Descriptions() {
    return (
        <section className={s._}>
            <ul className={classNames(s.container, 'wrapper')}>
                {items.map((item: TDescriptionItem) =>
                    <DescriptionItem key={item.title} item={item}/>
                )}
            </ul>
        </section>
    );
}

export default Descriptions;