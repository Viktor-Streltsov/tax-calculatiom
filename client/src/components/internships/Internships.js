import React, {useState} from 'react'
import classes from "./internships.module.css"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {links} from "../../links/links"
import {addApplication} from "../../axios/internshipApi"

function Internships() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')

    const isFormValid = () => email && name && description


    const submitHandler = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(addApplication(name, email, description))
            navigate(links.base)
            setName('')
            setDescription('')
            setEmail('')
        } else {
            alert('Введите все данные')
        }
    }

    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Отправьте заявку на стажировку, и мы ответим в течение двух дней
                    </h2>
                </div>
                <form
                    onSubmit={submitHandler}
                    className={classes.one_block}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="ФИО"/>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email"/>
                    <textarea
                        name="description"
                        cols="30" rows="5"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="text"
                    ></textarea>
                    <button
                        className={classes.btn_send}
                        type="submit">
                        <span>Отправить</span>
                    </button>
                    <p className={classes.text_conditions}>Нажимая на кнопку "Отправить", я принимаю <span>условия соглашения.</span>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Internships