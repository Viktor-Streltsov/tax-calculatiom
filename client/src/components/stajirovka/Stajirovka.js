import React from 'react'
import classes from "./stajirovka.module.css"

function Stajirovka() {
    return (
        <div className={classes.container_content}>
            <section className={classes.container_one}>
                <div className={classes.head_internships}>
                    <h1>Государственная налоговая служба</h1>
                </div>
                <div className={classes.p_one}>
                    <p>
                    Нало́говые о́рганы — это государственные учреждения, отвечающие за сбор, исчисление и уплату налогов в бюджет, в соответствии с действующим налоговым законодательством. В России налоговыми органами являются Федеральная налоговая служба и её подразделения.
                    </p>
                </div>
            </section>
            <section className={classes.container_two_list}>
                <div className={classes.head_list}>
                    <h2>Мы предлагаем</h2>
                </div>
                <div className={classes.block_list}>
                    <ul className={classes.block_list_one}>
                        <li>быструю отправку данных</li>
                        <li>востребованную сертификацию</li>
                        <li>работу круглосуточно</li>
                        <li>несколько месяцев на рынке</li>
                    </ul>
                    <ul className={classes.block_list_two}>
                        <li>изучить линейку программных продуктов 1С</li>
                        <li>на равных работать в молодом коллективе профессионалов</li>
                        <li>на практике научиться моделировать бизнес-процессы</li>
                        <li>получить сертификаты 1С за счет работодателя</li>
                        <li>участвовать в создании информационных систем для компаний</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Stajirovka