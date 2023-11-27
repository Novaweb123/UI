import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/app.reducer";
export default configureStore({
    reducer: {
        app: appReducer
    }
})
