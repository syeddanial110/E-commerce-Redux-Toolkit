import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
//     { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
// ]
const initialState = { cart: 0, items: [] }
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
      state.cart += 1
      state.items.push(action.payload)
    },
    removeItem(state, action) {
      state.cart = state.cart - 1
      console.log('action', action)
      state.items.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCartData, removeItem } = AddToCart.actions

export default AddToCart.reducer
