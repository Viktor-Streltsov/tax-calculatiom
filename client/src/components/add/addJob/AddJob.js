import React, {useState} from 'react'
import classes from "./addJob.module.css"
import {useDispatch} from "react-redux"
import {addJob} from "../../../axios/internshipApi"

function AddJob() {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [requirement, setRequirement] = useState('')
    const [responsibility, setResponsibility] = useState('')
    const [offer, setOffer] = useState('')

    const isFormValid = () => title && description && requirement && responsibility && offer

    const submitHandler = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(addJob(title, description,requirement,responsibility,offer))
            setTitle('')
            setDescription('')
            setRequirement('')
            setResponsibility('')
            setOffer('')
        } else {
            alert('Введите все данные')
        }
    }

    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Добавление вакансии
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
                    <input
                        type="text"
                        name="requirement"
                        value={requirement}
                        onChange={e => setRequirement(e.target.value)}
                        placeholder="Требования"/>
                    <input
                        type="text"
                        name="responsibility"
                        value={responsibility}
                        onChange={e => setResponsibility(e.target.value)}
                        placeholder="Обязанности"/>
                    <input
                        type="text"
                        name="offer"
                        value={offer}
                        onChange={e => setOffer(e.target.value)}
                        placeholder="Мы предлагаем"/>
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

export default AddJob