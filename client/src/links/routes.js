import {links} from "./links"
import {Navigate} from "react-router-dom"

import MainPage from "../pages/mainPage/MainPage"
import Signup from "../components/auth/sighup/Signup"
import Login from "../components/auth/login/Login"
import UserPage from "../pages/userPage/UserPage"
import AdminPage from "../pages/adminPage/AdminPage"
import InternshipPage from "../pages/internshipPage/InternshipPage"
import JobsPage from "../pages/JobsPage/JobsPage"
import AboutPage from "../pages/aboutPage/AboutPage"

export const authRoutes = [
    {
        path: links.admin,
        element: <AdminPage/>
    },
    {
        path: links.user + '/:id/',
        element: <UserPage/>
    },
]

export const publicRoutes = [
    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.signup,
        element: <Signup/>
    },
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: links.internship,
        element: <InternshipPage/>
    },
    {
        path: links.job,
        element: <JobsPage/>
    },
    {
        path: links.about,
        element: <AboutPage/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]