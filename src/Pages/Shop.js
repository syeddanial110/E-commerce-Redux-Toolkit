import React from 'react'
import Grid from '@mui/material/Grid'
import MainHeadrer from '../Components/MainHeadrer'
import ProductCard from '../Components/ProductCard'
import { data } from '../Components/utils/data'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementByAmount,
  increment,
  userAdded,
  addCartData,
  addSomething,
  add,
  addWishlist,
} from '../redux/actionAndReducer/AddToCart'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Shop = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cart, setCart] = useState(0)
  const [count, setCount] = useState(0)
  const [selectedId, setSelectedId] = useState('')

  const dataredux = useSelector((state) => state.addToCart)
  console.log('dataredux', dataredux)

  const handleAddToCart = (e, elm) => {
    dispatch(addCartData(elm))
  }
  const handleAddToWishlist = (e, elm) => {
    dispatch(addWishlist(elm))
  }

  return (
    <MainHeadrer>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            item
            container
            // sx={{ display: 'flex', justifyContent: 'center' }}
            justifyContent="center"
          >
            {data?.map((item, i) => {
              return (
                <Grid
                  item
                  xs={4}
                  mt={3}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                  // onClick={() => {
                  //   // navigate(`/shop/${item.id}`)
                  //   navigate(`/contact/${item.id}`)
                  // }}
                >
                  <ProductCard
                    boxOnClick={() => {
                      navigate(`/shop/${item.id}`)
                    }}
                    imageSrc={item.image}
                    productTitle={item.name}
                    productDescription={
                      item.description.substring(0, 90) + '...read more'
                    }
                    leftBtnTitle={'Add to Cart'}
                    rightBtnTitle={'Wishlist'}
                    leftCb={(e) => handleAddToCart(e, item)}
                    rightCb={(e) => handleAddToWishlist(e, item)}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </MainHeadrer>
  )
}

export default Shop
