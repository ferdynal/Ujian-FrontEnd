import { combineReducers } from 'redux'
import User from './userGlobal'
import UserCart from './userCartReducer'
import A from './countcart'

export default combineReducers({
    user : User,
    userCart : UserCart,
    countcart : A
})