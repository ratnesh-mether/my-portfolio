import { configureStore } from '@reduxjs/toolkit'
import slice from '../redux-state/slice';

const store = configureStore({
    reducer: {
        slice
    },
})

export default store;