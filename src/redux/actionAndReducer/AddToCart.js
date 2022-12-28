import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
//     { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
// ]

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
})

const initialState = { cart: 0, items: [], status: STATUSES }
// const initialState = {
//   cart: 0,
//   image: '',
//   name: '',
//   price: '',
// }

export const AddToCart = createSlice({
  name: 'add to cart',
  initialState,
  reducers: {
    // userAdded(state, action) {
    //   console.log('state', state)
    //   console.log('action', action)
    //   //   state.push(action.payload)
    // },
    // increment: (state, action) => {
    //   // state.cart.push({cart: })
    //   // for(var i =0; i< state.length ; i++){

    //   //   state[i].cart += 1
    //   //   state[i].image = action.payload.image
    //   //   state[i].name = action.payload.name
    //   //   state[i].price = action.payload.price
    //   // }
    //   state.cart += 1
    //   state.image = action.payload.image
    //   state.name = action.payload.name
    //   state.price = action.payload.price

    //   state = [{ state }]
    //   console.log('state', state)
    //   console.log('action.payload', action.payload)
    //   //   state.push(action.payload)
    // },
    // decrement: (state) => {
    //   state.cart -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   console.log('state', state)
    //   console.log('action', action)
    //   state.cart += action.payload
    // },
    // addCartData: (state, action) => {
    //   // console.log('state', state)
    //   // console.log('action', action)
    //   // state.cart.push(action.payload)
    //   // return { ...state, cart: [...state.cart, action.payload] }
    //   return { ...state.cart, cart: action.payload }
    // },
    // addSomething: (state, action) => {
    //   return { ...action.payload }
    // },

    addCartData(state, action) {
      console.log('state', state)
      console.log('action', action)
      let sum = 0
      for (var i = 0; i < state.items.length; i++) {
        if (action.payload.id != state.items[i].id) {
          // alert('match')
          // state.items.pop()
          // state.cart -= 1
        }
      }
      state.cart += 1
      state.items.push(action.payload)
    },
    removeItem(state, action) {
      state.cart = state.cart - 1
      console.log('action', action)
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
