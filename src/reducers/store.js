import { createStore } from 'redux'
import RootReducer from './index'

const store = createStore(
    RootReducer,
)

export default store