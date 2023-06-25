import {configureStore} from '@reduxjs/toolkit'

import cart from './slice/cartSlice'
import filter from './slice/filterSlice'

export const store = configureStore({
    reducer: {
        cart,
        filter,
    }
})