import React from 'react'
import classes from "./internshipItem.module.css"
import {useDispatch, useSelector} from "react-redux"
import {addUserInternship} from "../../axios/internshipApi"

function InternshipItem({internship}) {
    const dispatch = useDispatch()

    const {user} = useSelector(state => state.userReducer)

    const addInternship = () => {
        if (user.id) {
            dispatch(addUserInternship(internship.id, user.id))
        } else {
            alert("Авторизуйтесь")
        }
    }

    return (
        <li>
            <h2>{internship.title}</h2>
            <div className={classes.p_one}>
                <p>
                    {internship.description}
                </p>
                <button
                    className={classes.titl_btn}
                    onClick={addInternship}>Добавить в кабинет
                </button>
            </div>

        </li>
    )
}

export default InternshipItem