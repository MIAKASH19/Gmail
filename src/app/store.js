import { configureStore } from '@redux/toolkit'
import mailReducer from '../features/mailSlice'

export default configureStore({
    reducer: (
        mail: mailReducer,
    )
})