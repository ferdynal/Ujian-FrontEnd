import { USER_CART } from "../types";

export const setUserCart = (cart) => {
    return {
        type: USER_CART, payload: cart
    }
}