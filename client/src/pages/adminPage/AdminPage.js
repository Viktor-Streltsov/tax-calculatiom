import React, {useEffect} from 'react'
import AddInternship from "../../components/add/addInternship/AddInternship"
import AddJob from "../../components/add/addJob/AddJob"
import {getApplicationApi} from "../../axios/internshipApi"
import {useDispatch, useSelector} from "react-redux"
import moment from 'moment';

function AdminPage() {
    const dispatch = useDispatch()

    const {application} = useSelector(state => state.internshipReducer)

    useEffect(() => {
        dispatch(getApplicationApi())
    }, [dispatch])

    return (
       <>
           <AddInternship/>
           <AddJob/>
           <div className="container">
           <h1 >Заявки</h1>
               <table>
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>Имя</th>
                       <th>email</th>
                       <th>Описание</th>
                       <th>Дата добавления</th>
                   </tr>
                   </thead>
                   <tbody>
                   {application.map(item => (
                       <tr key={item.id}>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.email}</td>
                           <td>{item.description}</td>
                           <td>{moment(item.createdAt).format('MM.DD.YY HH:mm')}</td>
                       </tr>
                   ))}
                   </tbody>
               </table>
           </div>
       </>
    )
}

export default AdminPage