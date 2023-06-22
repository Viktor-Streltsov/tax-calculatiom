import React, {useState} from 'react'
import classes from "./addInternships.module.css"
import {useDispatch} from "react-redux"
import {addInternship} from "../../../axios/internshipApi"

function AddInternship() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const isFormValid = () => title && description

    const submitHandler = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(addInternship(title, description))
            setTitle('')
            setDescription('')
        } else {
            alert('Введите все данные')
        }
    }

    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Добавление стажировки
                    </h2>
                </div>
                <form
                    onSubmit={submitHandler}
                    className={classes.one_block}>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Названия стажировки"/>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Описание стажировки"/>
                    <button
                        className={classes.btn_send}
                        type="submit">
                        <span>Отправить</span>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AddInternship