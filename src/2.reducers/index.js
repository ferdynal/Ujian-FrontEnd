import { combineReducers } from 'redux'
import User from './userGlobal'
import UserCart from './userCartReducer'

export default combineReducers({
    user : User,
    userCart : UserCart
})