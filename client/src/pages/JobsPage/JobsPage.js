import React, {useEffect} from 'react'
import classes from "./jobsPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getJobsApi} from "../../axios/internshipApi"

function JobsPage() {

    const dispatch = useDispatch()

    const {jobs} = useSelector(state => state.internshipReducer)

    useEffect(() => {
        dispatch(getJobsApi())
    }, [dispatch])

    return (
        <div className={classes.container_content}>
            <section className={classes.container_one}>
                <table>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Требования</th>
                        <th>Обязанности</th>
                        <th>Мы предлагаем:</th>
                    </tr>
                    </thead>
                    {jobs.map(item => (
                    <tbody>
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.Requirement}</td>
                            <td>{item.responsibility}</td>
                            <td>{item.offer}</td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </section>
        </div>
    )
}

export default JobsPage