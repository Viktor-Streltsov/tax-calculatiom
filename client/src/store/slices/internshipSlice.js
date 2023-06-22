import {createSlice} from "@reduxjs/toolkit"

const internshipSlice = createSlice({
    name: 'internshipSlice',
    initialState: {
        internships: [],
        jobs: [],
        application: [],
        userInternship: [],
        internship: {},
    },
    reducers: {
        setApplication: (state, action) => {
            state.application = action.payload
        },
        setUserInternship: (state, action) => {
            state.userInternship = action.payload
        },
        setInternships: (state, action) => {
            state.internships = action.payload
        },
        setJobs: (state, action) => {
            state.jobs = action.payload
        },
        setInternship: (state, action) => {
            state.internship = action.payload
        }
    }
})

export const {
    setUserInternship,
    setInternships,
    setInternship,
    setJobs,
    setApplication

} = internshipSlice.actions

export default internshipSlice.reducer