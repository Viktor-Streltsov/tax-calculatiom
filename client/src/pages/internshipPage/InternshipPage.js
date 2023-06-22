import React, {useEffect} from 'react'
import classes from "./internshipPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import InternshipItem from "../../components/internshipItem/InternshipItem"
import {getInternshipsApi} from "../../axios/internshipApi"

function InternshipPage() {
    const dispatch = useDispatch()

    const {internships} = useSelector(state => state.internshipReducer)

    useEffect(() => {
        dispatch(getInternshipsApi())
    }, [dispatch])

    return (
        <div className={classes.container_content}>
            <section className={classes.container_one}>
                <div className={classes.head_internships}>
                    <h1>Стажировки</h1>
                </div>
                <ul>
                    {
                        internships.map(internship => <InternshipItem key={internship.id} internship={internship}/>)
                    }
                </ul>

            </section>
        </div>
    )
}

export default InternshipPage