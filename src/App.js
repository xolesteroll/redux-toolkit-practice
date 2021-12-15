import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from 'react'
import {uiActions} from "./store/slices/uiSlice";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

function App() {
    const dispatch = useDispatch()
    const cartIsVisible = useSelector(state => state.ui.showCart)
    const cart = useSelector(state => state.cart)
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'

            }))
            const response = await fetch('https://react-http-90cfb-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Sent!',
                message: 'Sent cart data!'

            }))
        }
        if (cart.items.length !== 0) {
            sendCartData().catch(e => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                }))
            })
        }
    }, [cart, dispatch])

    return (
        <>
            {
                notification && <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            }
            <Layout>
                {
                    cartIsVisible && <Cart/>
                }
                <Products/>
            </Layout>

        </>

    );
}

export default App;
