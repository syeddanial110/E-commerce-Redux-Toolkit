import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
})

const initialState = {
  cart: 0,
  items: [],
  //  status: STATUSES
}

export const AddToCart = createSlice({
  name: 'add to cart',
  initialState,
  reducers: {
    addCartData(state, action) {
      // let x = state.items.find((elm) => elm.id == action.payload.id)
      // console.log('x', x)
      let item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity++
      } else {
        state.cart += 1
        state.items.push(action.payload)
      }
      // state.cart += 1
      // state.items.push(action.payload)
    },
    removeItem(state, action) {
      state.cart -= 1
      state.items.splice(action.payload, 1)
    },
    setProduct(state, action) {
      state.cart = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProduct.pending, (state, action) => {
  //       state.status = STATUSES.LOADING
  //     })
  //     .addCase(fetchProduct.fulfilled, () => {
  //       state.status = STATUSES.IDLE
  //       state.data = action.payload
  //     }).addCase(fetchProduct.rejected,()=>{
  //       state.status = STATUSES.ERROR
  //     })
  // },
})

// Action creators are generated for each case reducer function
export const { addCartData, removeItem, setProduct } = AddToCart.actions

export default AddToCart.reducer

// Thunk

// way to fetch data from api

export function fetchProducts() {
  return async function fetchProductThunck(dispatch, getState) {
    try {
      // const data = axion.get...
      // setProduct(data)
    } catch (error) {}
  }
}

// another way

// if we use createAsyncThunk no need to create reducers, aik or key hoti hai named extraReducer me arrow function hota hai

export const fetchProduct = createAsyncThunk('url', async () => {
  // const res = axios.get...
  // const data =await re.json()
  // return data
})
