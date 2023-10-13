import {useEffect, useState} from "react";
import {UseCookieAlert} from "./CookieAlertTypes";


function useCookieAlert(): UseCookieAlert {
    let [visible, setVisible] = useState(false);

    useEffect(() => {
        const isCookieDate = localStorage.getItem('cookieDate');
        setTimeout(() => !isCookieDate && setVisible(true), 500);
    }, []);

    function onClick(): void {
        const date = new Date();
        localStorage.setItem('cookieDate', String(date.getTime()));
        setVisible(false);
    }

    return {visible, onClick};
}

export default useCookieAlert;