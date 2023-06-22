import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setIsAuth, setUser} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"
import logo from "../../img/Logo_group.png"
import {getInternshipsApi, getJobsApi} from "../../axios/internshipApi"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
        dispatch(setUser(''))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getInternshipsApi())
        dispatch(getJobsApi())
        dispatch(getUsers())
    }, [dispatch])

    return (
        <header className={classes.container_head}>
            <div className={classes.head_block}>
                <div className={classes.logo_img}>
                    <Link to={links.base}><img src={logo} alt="logo"/></Link>
                </div>
                <div className={classes.menu_container}>
                    <nav className={classes.menu}>
                        <ul className={classes.menu_block}>
                            <li>
                                <Link to={links.about}>О нас</Link>
                            </li>
                            <li>
                                <Link to={links.job}>Вакансии</Link>
                            </li>
                            <li>
                                <Link to={links.internship}>Стажировки</Link>
                            </li>
                            {isAuth
                                ?
                                <>
                                    <li className={classes.btn_nav1}>
                                        Login "{user.login}"
                                    </li>
                                    <li onClick={userCabinet} className={classes.btn_nav1}>
                                       Кабинет
                                    </li>
                                    {user.role === "ADMIN"
                                        ?
                                        <li onClick={admin} className={classes.btn_nav1}>
                                            Adminka
                                        </li>
                                        :
                                        ''
                                    }
                                    <li onClick={logOut} className={classes.btn_nav1}>
                                            Выход
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to={links.signup}>Регистрация</Link>
                                    </li>
                                    <li>
                                        <Link to={links.login}>Войти</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header