import React from 'react'
import CartDetails from '../CartDetails'

const Index = ({ setToggleWishlist }) => {
  return (
    <CartDetails isSummaryTotal={true} setToggleWishlist={setToggleWishlist} />
  )
}

export default Index
