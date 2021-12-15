import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
   reducer: {
       ui: uiReducer,
       cart: cartReducer
   }

})

window.store = store

export default store