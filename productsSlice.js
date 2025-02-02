import { createAsynsThunk, createSlice } from "@reduxjs/toolkit"
import productService from "./ productService"

const initialState = {
    product: [],
    error:null,
    loading: false
}

export const getProducts = createAsynsThunk('Product-list/getAll', asyns(-, thunkAPI) => {
    try {
        return await  productService.getAll()
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})
export const productsslice = createSlice({
    name: 'product-list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending, state => {
       state.loading = true 
        })

    }
    .addCase(getProducts.rejected, (state, action) => {
        state.loading = false 
        state.error =action.payload
    })
    .addCase(getProducts,fullfilled, (state,action) => {
        state.loading= false
        state.error = null
        state.product = action.payload
    })
})



export defult productsslice.reducer