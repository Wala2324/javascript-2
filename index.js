import { configurStore } from "@reduxjs/toolkit";
import productsslice from "./features/products/productsSlice";
import shoppingCartSlice from "./features/shoppingCart/shoppingCartSlice";


export const store = configureStore({
  reducer: {
    ProductList: productsslice,
    shoppingCart: shoppingCartSlice,
    }
})