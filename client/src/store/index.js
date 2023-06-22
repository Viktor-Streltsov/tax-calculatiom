import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import internshipReducer from './slices/internshipSlice'
import preloaderReducer from './slices/preloaderSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        internshipReducer,
        preloaderReducer
    }
})