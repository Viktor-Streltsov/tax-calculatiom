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
                <ul>
                    {
                        jobs.map(job =>
                            <li>
                                <h1 className={classes.title}>{job.title}</h1>
                                <p>{job.description}</p>
                                <h3>Требования:</h3>
                                <p>{job.Requirement}</p>
                                <h3>Обязанности:</h3>
                                <p>{job.responsibility}</p>
                                <h3>Мы предлагаем:</h3>
                                <p>{job.offer}</p>
                            </li>
                        )
                    }
                </ul>
            </section>
        </div>
    )
}

export default JobsPage