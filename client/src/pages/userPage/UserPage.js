import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getUserInternshipApi} from "../../axios/internshipApi"

function UserPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {userInternship} = useSelector(state => state.internshipReducer)
    console.log("userInternship", userInternship)

    useEffect(() => {
        dispatch(getUserInternshipApi(id))
    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>Ваш кабинет</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.nav_tarif}>
                        <ul className={classes.nav_tarif_link}>
                            <li>Интернет</li>
                        </ul>
                    </div>
                    <div className={classes.cart_tarif}>
                        <table>
                            <thead>
                            <tr>
                                <th>Название стажировки</th>
                                <th>Описание</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userInternship.map(item => (
                                <tr key={item.internship.id}>
                                    <td>{item.internship.title}</td>
                                    <td>{item.internship.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserPage