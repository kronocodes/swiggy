import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer : {
        cart: CartSlice,
        search: searchSlice,
        menu: menuSlice,
    }
});

export default store;