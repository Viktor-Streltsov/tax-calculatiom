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
        <tbody>
        <tr key={internship.id}>
            <td>{internship.title}</td>
            <td>{internship.description}</td>
            <td>
                <button
                    className={classes.titl_btn}
                    onClick={addInternship}>Добавить в кабинет
                </button>
            </td>
        </tr>
        </tbody>
    )
}

export default InternshipItem