export const ADD = (item) => {
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}

export const REMOVE = (id) => {
    return{
        type:"REMOVE_TO_CART",
        payload:id
    }
}

export const ADD_WISHLIST = (item) => {
    return{
        type:"ADD_TO_WISHLIST",
        payload:item
    }
}

export const REMOVE_WISHLIST = (id) => {
    return{
        type:"REMOVE_TO_WISHLIST",
        payload:id
    }
}

// export const INCREASE_VALUE = (item) => {
//     return{
//         type:"INCREASE_CART_VALUE",
//         payload:item
//     }
// }

// export const DECREASE_VALUE = (id) => {
//     return{
//         type:"DECRESE_CART_VALUE",
//         payload:id
//     }
// }

export const UPDATE_QUANTITY = (id , quantity) => {
    return {
        type : "UPDATE_QUANTITY",
        payload : {id , quantity}
    }
}