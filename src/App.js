import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from 'react'

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import {fetchCardData, sendCartData} from "./store/actions/cartActions";

function App() {
    const dispatch = useDispatch()
    const cartIsVisible = useSelector(state => state.ui.showCart)
    const cart = useSelector(state => state.cart)
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {
        dispatch(fetchCardData())
    }, [dispatch])

    useEffect(() => {
        // if (isInitial) {
        //     isInitial = false
        //     return
        // }
        if (cart.changed) {
            dispatch(sendCartData(cart))
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
