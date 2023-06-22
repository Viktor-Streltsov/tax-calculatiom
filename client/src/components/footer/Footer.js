import React from 'react'
import classes from "./footer.module.css"
import phone from "../../img/phone.png"
import vk from "../../img/icon_vk.png"
import mail from "../../img/mail.png"
import marker from "../../img/marker.png"

import youtube from "../../img/icon_youtube.png"
import {links} from "../../links/links"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className={classes.container_footer}>
            <div className={classes.block}>
                <div className={classes.block_connection}>
                    <p>
                        <img src={marker} alt="marker"/>
                        <a href="https://goo.gl/maps/2yFkesLveFCtSByS7" target="_blank">
                            <span>г. Бишкек, ул. Вишневского, д.12</span>
                        </a>
                    </p>
                    <p>
                        <img src={mail} alt="mail"/>
                        <a href="mailto:info@piter-soft.kg">
                            <span>info@piter-soft.kg</span>
                        </a>
                    </p>
                    <p>
                        <img src={phone} alt="phone"/>
                        <a href="tel:996 580 651321">
                            <span>+996 580 651321</span>
                        </a>
                    </p>
                </div>
                <div className={classes.block_agreement}>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности</p>
                    <p>Файлы Cookie</p>
                </div>
                <div className={classes.block_btn}>
                    <Link to={links.login}>Войти</Link>
                </div>
                <div className={classes.block_icon}>
                    <img src={youtube} alt="icon"/>
                    <img src={vk} alt="icon"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer