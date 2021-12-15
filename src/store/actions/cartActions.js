import {uiActions} from "../slices/uiSlice";
import {cartActions} from "../slices/cartSlice";

export const fetchCardData = () => async (dispatch) => {
    const fetchData = async () => {
        const response = await fetch('https://react-http-90cfb-default-rtdb.firebaseio.com/cart.json')

        if (!response.ok) {
            throw new Error('Something went wrong')
        }

        const data = await response.json()
        return data
    }

    try {
       const cartData = await fetchData()
       dispatch(cartActions.replaceCart({
           items: cartData.items || [],
           totalAmount: cartData.totalAmount,
           totalItemsPrice: cartData.totalItemsPrice
       }))
    } catch (e) {
        dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: e.message
        }))
    }
}

export const sendCartData = (cart) => async (dispatch) => {
    dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'

    }))

    const sendRequest = async () => {
        const response = await fetch('https://react-http-90cfb-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify({
                items: cart.items,
                totalAmount: cart.totalAmount,
                totalItemsPrice: cart.totalItemsPrice,
            })
        })

        if (!response.ok) {
            throw new Error('Sending cart data failed.')
        }
    }

    try {
        await sendRequest()

        dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Sent!',
            message: 'Sent cart data!'
        }))
    } catch (e) {
        dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: e.message
        }))
    }
}
