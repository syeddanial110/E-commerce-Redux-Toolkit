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
} from '../redux/actionAndReducer/AddToCart'
import { useState } from 'react'

const Shop = (props) => {
  const dispatch = useDispatch()

  const [cart, setCart] = useState(0)
  const [count, setCount] = useState(0)

  const dataredux = useSelector((state) => state.addToCart)
  console.log('dataredux', dataredux)

  const handleIncrement = (e, elm) => {
    console.log('elm', elm)
    let sum = 0
    setCount(count + 1)
    // const dataObj = {
    //   cart: count,
    //   name: elm.name,
    //   description: elm.description,
    //   price: elm.price,
    // }
    // console.log('dataObj', dataObj)
    // dispatch(addCartData(elm))
    // dispatch(userAdded({ name: 'danial' }))
    // dispatch(
    //   addSomething({
    //     name: elm.name,
    //     price: elm.price,
    //     cart: count + 1
    //   }),
    // )
    const dataObj = {
      elm,
      cart: sum + 1,
    }
    dispatch(addCartData(elm))
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
                >
                  <ProductCard
                    imageSrc={item.image}
                    productTitle={item.name}
                    productDescription={
                      item.description.substring(0, 90) + '...read more'
                    }
                    leftBtnTitle={'Add to Cart'}
                    rightBtnTitle={'Wishlist'}
                    leftCb={(e) => handleIncrement(e, item)}
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
