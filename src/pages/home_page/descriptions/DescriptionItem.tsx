import s from "./description_item/DescriptionItem.module.scss";
import {DescriptionItemProps} from "./description_item/DescriptionItemTypes";


function DescriptionItem({item}: DescriptionItemProps) {
    return (
        <li className={s._}>
            <div className={s.icon}>{item.icon}</div>
            <h3 className={s.title}>{item.title}</h3>
            <p className={'text'}>{item.text}</p>
        </li>
    );
}

export default DescriptionItem;