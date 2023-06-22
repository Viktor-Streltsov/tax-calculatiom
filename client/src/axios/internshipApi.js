import {$api,} from "./index"
import {setError} from "../store/slices/errorSlice"
import {
    setApplication,
    setInternship,
    setInternships,
    setJobs,
    setUserInternship,
} from "../store/slices/internshipSlice"
import {preloader} from "../store/slices/preloaderSlice"

export const getInternshipsApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/internship/`)
            dispatch(setInternships(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getJobsApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/job/`)
            dispatch(setJobs(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getInternshipApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/internship/${id}`)
            dispatch(setInternship(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getUserInternshipApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_internship/user/${id}`)
            dispatch(setUserInternship(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addInternship = (title, description) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/internship/', {title, description})
            if (data.status === 200) {
                alert('Вы успешно добавили')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addJob = (title, description, Requirement, responsibility, offer) => {
    return async (dispatch) => {
        try {
            console.log(title, description, Requirement, responsibility, offer)
            const data = await $api.post('api/job/', {title, description, Requirement, responsibility, offer})
            if (data.status === 200) {
                alert('Вы успешно добавили')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addUserInternship = (internshipId, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_internship/', {internshipId, userId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addApplication = (name, email, description) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/application/', {name, email, description})
            if (data.status === 200) {
                alert('Вы успешно отправили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}


export const getApplicationApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/application/`)
            dispatch(setApplication(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}
