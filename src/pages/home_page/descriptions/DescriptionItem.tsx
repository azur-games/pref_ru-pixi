import {ReactComponent as LikeIcon} from 'assets/icons/like.svg';
import s from "./description_item/DescriptionItem.module.scss";
import {DescriptionItemProps} from "./description_item/DescriptionItemTypes";


function DescriptionItem({item}: DescriptionItemProps) {
    return (
        <li className={s._}>
            <LikeIcon className={s.icon}/>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.text}>{item.text}</p>
        </li>
    );
}

export default DescriptionItem;