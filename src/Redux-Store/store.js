import { configureStore } from '@reduxjs/toolkit'
import slice from '../Redux-State/slice';

const store = configureStore({
    reducer: {
        slice
    },
})

export default store;