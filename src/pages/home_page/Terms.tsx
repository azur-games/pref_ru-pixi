import {Link} from "react-router-dom";
import s from "./terms/Terms.module.scss";


function Terms() {
    return (
        <div className={s._}>
            <Link to={'/terms_of_use'} className={s.button}>Условия использования</Link>
        </div>
    );
}

export default Terms;