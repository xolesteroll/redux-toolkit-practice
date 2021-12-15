import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/slices/uiSlice";

import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch()
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const toggleCartVisibility = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <button onClick={toggleCartVisibility} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalAmount}</span>
        </button>
    );
};

export default CartButton;
