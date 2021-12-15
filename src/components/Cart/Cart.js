import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Cart = (props) => {
    const totalPrice = useSelector(state => state.cart.totalItemsPrice)
    const [items, setItems] = useState([])


    // const items = useSelector(state => state.cart.items)

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {items.length !== 0 ? items.map(item => {
                    return <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.title,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price
                        }}
                    />
                }) : <p>Your Cart is Empty</p>}
            </ul>
            <span>Total price: {totalPrice}</span>
        </Card>
    );
};

export default Cart;
