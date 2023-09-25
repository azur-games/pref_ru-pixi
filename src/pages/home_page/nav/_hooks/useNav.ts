import {useEffect, useState} from "react";
import {UseNav} from "../NavTypes";


function useNav(): UseNav {
    let [isActive, setIsActive] = useState(false);

    function onClickBurger(): void {
        setIsActive(prev => !prev);
    }

    useEffect(() => {
        isActive && window.innerWidth < 768
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = '';
    }, [isActive]);

    return {isActive, onClickBurger};
}

export default useNav;