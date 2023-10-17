import cn from "classnames";
import {Link} from "react-router-dom";
import s from "./terms_of_use/TermsOfUse.module.scss";


function CookiePolicy() {
    return (
        <main className={cn(s._, 'wrapper')}>
            <h3 className={s.title}>Политика использования файлов cookie</h3>

            <div className="text">
                <p><strong>Что такое файлы cookie?</strong></p>
                <p>Файл cookie — это файл, содержащий идентификатор (строка букв и цифр), который отправляется веб-сервером в веб-браузер и хранится в браузере. Затем идентификатор пересылается на сервер каждый раз, когда браузер отправляет запрос на
                    открытие страницы на сервере.</p>
                <br/>

                <p><strong>Для чего мы используем файлы cookie?</strong></p>
                <p>Компания «Azur Interactive Games Limited» использует файлы cookie для того, чтобы:</p>

                <ul>
                    <li>лучше понимать ваши предпочтения;</li>
                    <li>помочь вам ориентироваться на нашем сайте;</li>
                    <li>персонализировать и предоставлять вам более удобный пользовательский опыт;</li>
                    <li>анализировать, какие страницы вы посещаете;</li>
                    <li>оценивать эффективность рекламы и продвижения.</li>
                </ul>
                <br/>

                <p><strong>Какие данные мы обрабатываем при установке файлов cookie в вашем браузере?</strong></p>
                <p>При установке файлов cookie в вашем браузере мы автоматически обрабатываем ваш IP-адрес, географическое положение (страна или город), тип и версию операционной системы (ОС), тип и версию браузера, тип устройства и разрешение его
                    дисплея, источник трафика для пользователя, язык ОС и браузера, а также анализируем, какие кнопки вы нажимаете и какие страницы открываются, если вы дадите нам свое согласие.</p>

                <p>Мы обрабатываем данную информацию для того, чтобы лучше понимать ваши предпочтения, помочь вам ориентироваться на нашем сайте, персонализировать и предоставить вам более удобный пользовательский опыт, анализировать, какие страницы
                    вы посещаете, и оценивать эффективность рекламы и продвижения.</p>

                <p>Обратите внимание, что вы можете отозвать свое согласие в любое время, изменив настройки вашего веб-браузера, как указано <Link to="#remove_cookie">здесь</Link>.</p>

                <p>Мы будем обрабатывать ваши данные в течение 2 лет или до тех пор, пока вы не отзовете свое согласие — в зависимости от того, что произойдет раньше.</p>

                <p>Чтобы узнать больше о том, как мы обрабатываем ваши персональные данные, вы можете ознакомиться с нашей <Link to={'/terms-of-use'}>Политикой конфиденциальности</Link>.</p>
                <br/>

                <p><strong>Список файлов cookie</strong></p>
                <p>Обязательные файлы cookie помогают сделать сайт удобным для использования, обеспечивая такие основные функции, как навигация по странице и доступ к защищенным областям сайта. Без обязательных файлов cookie сайт не может
                    функционировать должным образом.</p>

                <p>Статистические файлы cookie помогают владельцам сайтов понять, как пользователи взаимодействуют в сайтами, собирая и передавая информацию в анонимном порядке.</p>

                <p>Рекламные файлы cookie используются для отслеживания действий пользователей на разных сайтах. Рекламные файлы cookie нужны для того, чтобы показывать рекламу, которая является релевантной и привлекательной для конкретного
                    пользователя и, таким образом, более ценной для издателей и сторонних рекламодателей.</p>

                <p>Файлы cookie предпочтений позволяют сайту запоминать информацию, которая изменяет его поведение или внешний вид, например, предпочитаемый язык или регион, в котором вы находитесь.</p>

                <p>Неклассифицированные файлы cookie — это файлы cookie, которые мы классифицируем вместе с отдельными поставщиками файлов cookie.</p>

                <p>В частности, мы используем следующие файлы cookie и технологии отслеживания, включая файлы cookie наших партнеров и провайдеров услуг:</p>
                <br/>

                <div className={s.table}>
                    <table id="tablepress-3" className="tablepress tablepress-id-3 dataTable no-footer">
                        <thead>
                        <tr className="row-1 odd">
                            <th className="column-1">Название</th>
                            <th className="column-2">Провайдер</th>
                            <th className="column-3">Продолжительность</th>
                            <th className="column-4">Категория</th>
                            <th className="column-5">Описание</th>
                        </tr>
                        </thead>
                        <tbody className="row-hover">
                        <tr className="row-2">
                            <td className="column-1">_grecaptcha</td>
                            <td className="column-2">Azur Interactive Games Limited<br/>
                                <br/>
                            </td>
                            <td className="column-3">Постоянно</td>
                            <td rowSpan={7} className="column-4">Обязательный файл cookie</td>
                            <td rowSpan={6} className="column-5">Этот файл cookie используется для различения людей и ботов. Полезно для сайта, поскольку позволяет составлять достоверные отчеты о его использовании.</td>
                        </tr>
                        <tr className="row-3">
                            <td className="column-1">_GRECAPTCHA</td>
                            <td rowSpan={5} className="column-2"><a href="https://policies.google.com/privacy">Google reCAPTCHA</a></td>
                            <td className="column-3">179 дней</td>
                        </tr>
                        <tr className="row-4">
                            <td className="column-1">rc::a</td>
                            <td className="column-3">Постоянно</td>
                        </tr>
                        <tr className="row-5">
                            <td className="column-1">rc::b</td>
                            <td rowSpan={2} className="column-3">Сеанс</td>
                        </tr>
                        <tr className="row-6">
                            <td className="column-1">rc::c</td>
                        </tr>
                        <tr className="row-7">
                            <td className="column-1">rc::d-15#</td>
                            <td className="column-3">Постоянно</td>
                        </tr>
                        <tr className="row-8">
                            <td className="column-1">i</td>
                            <td className="column-2"><a href="https://metrica.yandex.com/about/info/privacy-policy">Yandex.Metrica</a></td>
                            <td className="column-3">10 лет</td>
                            <td className="column-5">Сохраняет состояние пользователя при разных запросах страницы.</td>
                        </tr>
                        <tr className="row-9">
                            <td className="column-1">pll_language</td>
                            <td className="column-2">Azur Interactive Games Limited</td>
                            <td className="column-3">1 год</td>
                            <td className="column-4">Файл cookie предпочтений</td>
                            <td className="column-5">Используется для определения языка, предпочитаемого пользователем, и по возможности устанавливает соответствующий язык на сайте.</td>
                        </tr>
                        <tr className="row-10">
                            <td className="column-1">_vw_tab_guid</td>
                            <td rowSpan={5} className="column-2"><a href="https://policies.google.com/privacy?hl=en-US">Google Analytics</a></td>
                            <td className="column-3">Сеанс</td>
                            <td rowSpan={8} className="column-4">Статистический файл cookie</td>
                            <td className="column-5">Регистрирует данные о поведении посетителей сайта. Используется для внутреннего анализа и оптимизации сайта.</td>
                        </tr>
                        <tr className="row-11">
                            <td className="column-1">_ga</td>
                            <td rowSpan={2} className="column-3">2 года</td>
                            <td className="column-5">Регистрирует уникальный идентификатор, который используется для получения статистических данных о том, как пользователь использует сайт.</td>
                        </tr>
                        <tr className="row-12">
                            <td className="column-1">_ga_#</td>
                            <td className="column-5">данных о том, сколько раз пользователь посетил сайт, а также регистрирует даты первого и последнего посещения.</td>
                        </tr>
                        <tr className="row-13">
                            <td className="column-1">_gat</td>
                            <td rowSpan={2} className="column-3">1 день</td>
                            <td className="column-5">Используется Google Analytics для снижения частоты запросов.</td>
                        </tr>
                        <tr className="row-14">
                            <td className="column-1">_gid</td>
                            <td className="column-5">Регистрирует уникальный идентификатор, который используется для получения статистических данных о том, как пользователь использует сайт.</td>
                        </tr>
                        <tr className="row-15">
                            <td className="column-1">_ym_retryReqs</td>
                            <td rowSpan={12} className="column-2"><a href="https://metrica.yandex.com/about/info/privacy-policy">Yandex.Metrica</a></td>
                            <td className="column-3">Постоянно</td>
                            <td className="column-5">Регистрирует статистические данные о поведении пользователей на сайте. Используется для внутренней аналитики оператором сайта.</td>
                        </tr>
                        <tr className="row-16">
                            <td className="column-1">yandexuid</td>
                            <td rowSpan={2} className="column-3">1 год</td>
                            <td rowSpan={2} className="column-5">Регистрирует данные о поведении посетителей сайта. Используется для внутреннего анализа и оптимизации сайта.</td>
                        </tr>
                        <tr className="row-17">
                            <td className="column-1">ymex</td>
                        </tr>
                        <tr className="row-18">
                            <td className="column-1">_ym#_lastHit</td>
                            <td rowSpan={3} className="column-3">Постоянно</td>
                            <td rowSpan={15} className="column-4">Рекламный файл cookie</td>
                            <td rowSpan={3} className="column-5">Неклассифицированный файл cookie</td>
                        </tr>
                        <tr className="row-19">
                            <td className="column-1">_ym#_lsid</td>
                        </tr>
                        <tr className="row-20">
                            <td className="column-1">_ym#_reqNum</td>
                        </tr>
                        <tr className="row-21">
                            <td className="column-1">_ym_d</td>
                            <td className="column-3">1 год</td>
                            <td className="column-5">Содержит данные о первом посещении посетителем сайта.</td>
                        </tr>
                        <tr className="row-22">
                            <td className="column-1">_ym_isad</td>
                            <td className="column-3">1 день</td>
                            <td className="column-5">Данный файл cookie определяет, установлено ли в браузере пользователя программное обеспечение для блокировки рекламы. Эта информация может быть использована для того, чтобы сделать содержание сайта
                                недоступным для посетителей, если сайт финансируется за счет рекламы третьих лиц.
                            </td>
                        </tr>
                        <tr className="row-23">
                            <td className="column-1">_ym_uid</td>
                            <td className="column-3">1 год</td>
                            <td className="column-5">Данный файл cookie используется для сбора информации неличного характера о поведении посетителя на сайте и статистики неличных данных посетителей.</td>
                        </tr>
                        <tr className="row-24">
                            <td className="column-1">_ym_uid</td>
                            <td className="column-3">Постоянно</td>
                            <td className="column-5">Собирает данные о навигации и поведении пользователя на сайте. Используется для составления статистических отчетов и карт кликов для владельца сайта</td>
                        </tr>
                        <tr className="row-25">
                            <td className="column-1">_ym_visorc</td>
                            <td className="column-3">1 день</td>
                            <td className="column-5">Сохраняет информацию о действиях, совершенных пользователем во время текущего посещения сайта, включая поиск по введенным ключевым словам.</td>
                        </tr>
                        <tr className="row-26">
                            <td className="column-1">_ym_wv2rf:#:0</td>
                            <td className="column-3">Постоянно</td>
                            <td className="column-5">Неклассифицированный файл cookie</td>
                        </tr>
                        <tr className="row-27">
                            <td className="column-1">ads/ga-audiences</td>
                            <td className="column-2"><a href="https://policies.google.com/privacy">Google AdWords<br/>
                            </a></td>
                            <td rowSpan={5} className="column-3">Сеанс</td>
                            <td className="column-5">Используется Google AdWords для повторного привлечения пользователей, которые с большой вероятностью станут постоянными клиентами, на основе поведения пользователя в Интернете на разных сайтах.
                            </td>
                        </tr>
                        <tr className="row-28">
                            <td className="column-1">metrika_enabled</td>
                            <td rowSpan={5} className="column-2"><a href="https://metrica.yandex.com/about/info/privacy-policy">Yandex.Metrica</a></td>
                            <td className="column-5">Используется для отслеживания посетителей на нескольких сайтах, чтобы предоставлять соответствующую рекламу на основе предпочтений пользователя.</td>
                        </tr>
                        <tr className="row-29">
                            <td className="column-1">watch/#</td>
                            <td rowSpan={2} className="column-5">Неклассифицированный файл cookie</td>
                        </tr>
                        <tr className="row-30">
                            <td className="column-1">webvisor/#</td>
                        </tr>
                        <tr className="row-31">
                            <td className="column-1">yabs-sid</td>
                            <td className="column-5">Регистрирует данные о поведении посетителей сайта. Используется для внутреннего анализа и оптимизации сайта.</td>
                        </tr>
                        <tr className="row-32">
                            <td className="column-1">yuidss</td>
                            <td className="column-3">1 год</td>
                            <td className="column-5">Собирает информацию о поведении пользователей на нескольких сайтах. Данная информация используется для оптимизации релевантности рекламы на сайте.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>

                <p id="remove_cookie"><strong>Что вы можете сделать, если вы не хотите хранить файлы cookie или хотите удалить их?</strong></p>
                <p>Вы можете отозвать согласие на сохранение файлов cookie, изменив настройки вашего браузера.</p>

                <p>Вы можете ознакомиться с инструкциями по управлению файлами cookie, опубликованными разработчиками браузеров в <a href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop&oco=1#zippy=">Google
                    Chrome</a>, Safari (<a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac">версия для ПК</a>, <a href="https://support.apple.com/en-us/HT201265">мобильная версия</a>), <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Firefox</a
                > и <a href="https://support.microsoft.com/en-us/help/260971/description-of-cookies">Internet Explorer</a>.</p>
            </div>
        </main>

    );
}

export default CookiePolicy;