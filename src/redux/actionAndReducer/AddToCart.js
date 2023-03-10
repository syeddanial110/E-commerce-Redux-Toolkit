import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
})

const initialState = {
  cart: 0,
  cartData: [],
  wishlistData: [],
  wishlist: 0,

  //  status: STATUSES
}

export const AddToCart = createSlice({
  name: 'add to cart',
  initialState,
  reducers: {
    addCartData(state, action) {
      // let x = state.cartData.find((elm) => elm.id == action.payload.id)
      // console.log('x', x)
      let item = state.cartData.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity++
      } else {
        state.cart += 1
        state.cartData.push(action.payload)
      }
      // state.cart += 1
      // state.cartData.push(action.payload)
    },
    removeItem(state, action) {
      let item = state.cartData.find((i) => i.id === action.payload.item.id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        state.cart -= 1
        state.cartData.splice(action.payload.index, 1)
      }
    },
    addWishlist(state, action) {
      let item = state.wishlistData.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity++
      } else {
        state.wishlist += 1
        state.wishlistData.push(action.payload)
      }
    },
    removeWhishlist(state, action) {
      let item = state.wishlistData.find((i) => i.id === action.payload.item.id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        state.wishlist -= 1
        state.wishlistData.splice(action.payload.index, 1)
      }
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
export const {
  addCartData,
  removeItem,
  setProduct,
  addWishlist,
  removeWhishlist,
} = AddToCart.actions

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
