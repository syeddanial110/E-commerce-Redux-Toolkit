import { CloudDoneSharp } from '@mui/icons-material'
import { Badge, Box, Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { removeItem } from '../../redux/actionAndReducer/AddToCart'
import StripeCheckout from 'stripe-checkout'
import StripePayment from '../StripePayment'

// const useStyle = makeStyles(() => ({
//   cancelBtn: {
//     '& *': {
//       backgroundColor: 'red',
//     },
//   },
// }))
const useStyle = makeStyles(() => ({
  cancelBtn: {
    '&': {
      border: '0px solid !important',
      //  backgroundColor:"red !important",
      //  border: "1px solid red",
      color: 'red !important',
    },
    '& *': {
      //   backgroundColor: 'red',
      border: '1px solid red',
      color: 'red !important',
      //   color:"white !important"
    },
  },
  saveBtn: {
    '&': {
      backgroundColor: 'red !important',
    },
  },
}))
const Index = (props) => {
  const { setToggleCart, isSummaryTotal, setToggleWishlist } = props
  const classes = useStyle()
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState()

  const data = useSelector((state) => state.addToCart)
  console.log('dataReducer', data)
  console.log('totalPrice', totalPrice)

  const removeItemFomCart = (item, index) => {
    const dataObj = {
      item,
      index,
    }
    dispatch(removeItem(dataObj))
  }
  var myData = isSummaryTotal ? data?.wishlistData : data?.cartData

  useEffect(() => {
    let sum = 0
    let y = 0

    let x = data.cartData.filter((item) => {
      if (item.quantity > 1) {
        y = parseInt(item.price)
        y *= item.quantity
        // console.log('y', y)
        sum += y
      } else {
        sum += parseInt(item.price)
      }
      return item
    })
    // console.log('x', x)
    // console.log('sum', sum)
    // let add = data.items.reduce((prev = 0, current) => {
    //   return prev + parseInt(current.price)
    // }, sum)
    // let add = data.items.reduce((prev, current) => parseInt(prev.price) + parseInt(current.price), sum)
    setTotalPrice(sum)
    // console.log('add', add)
  }, [data.items])

  const handleToken = (token, addresses) => {
    // Send the token and the product price to your server to charge the user's credit card
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify({
        token: token.id,
        amount: totalPrice * 100,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log('Purchase completed successfully')
      }
    })
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        {data?.cartData.length > 0 ? (
          myData.map((item, i) => {
            return (
              <>
                <Grid item container mt={2} sx={{ border: '1px solid' }}>
                  <Grid item xs={3}>
                    <Badge badgeContent={item.quantity} color="info">
                      <img alt="image" src={item.image} height={150} />
                    </Badge>
                  </Grid>
                  <Grid item xs={8}>
                    <Stack justifyContent="space-around" sx={{ height: 150 }}>
                      <Typography>{item.name}</Typography>
                      <Typography>Price: ${item.price}</Typography>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Box
                      sx={{ '&:hover': { cursor: 'pointer' } }}
                      onClick={() => removeItemFomCart(item, i)}
                    >
                      <CloseIcon />
                    </Box>
                  </Grid>
                </Grid>
              </>
            )
          })
        ) : (
          <>
            <Typography mt={2}>Back to shop</Typography>
          </>
        )}
        <Grid item container mt={2}>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              className={classes.cancelBtn}
              onClick={() => {
                if (isSummaryTotal == true) {
                  setToggleWishlist(false)
                } else {
                  setToggleCart(false)
                }
              }}
              //   color="white"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{ border: '1px solid', display: isSummaryTotal ? 'none' : 'block' }}
      >
        <Stack spacing={2} sx={{ height: '100% !important' }}>
          {data?.cartData.map((item) => {
            // let sum = 0
            // sum += parseInt(item.price)
            // setTotalPrice(sum)
            return (
              <>
                <Stack direction="row" justifyContent="space-between" p={2}>
                  <Typography>{item.name}</Typography>
                  <Typography> ${item.price}</Typography>
                </Stack>
              </>
            )
          })}
          <Typography>Total: {totalPrice}</Typography>
          {/* <Button sx={{ justifySelf: 'flex-end' }}>Check out</Button> */}
          {/* <StripeCheckout
            stripeKey={"sk_test_51MJyY9BTk5iDuYQlGs9WzNcZJFJW8iocPSEArqV2SfKJC4RMyhUNf1cJjums1sWiuIqyPNuw0fit9vqKiDIXQOxm00iVYp6yCJ"} // Your Stripe publishable key
            token={handleToken} // Callback function that is called when the checkout process is complete
            amount={totalPrice * 100} // Your product price in cents
            name="Your Product" // The name of your product
            billingAddress
            shippingAddress
            image="/your-product-image.jpg" // The URL of your product image
            currency="USD" // The currency for the product price
            panelLabel="Pay Now" // The label for the payment button
            zipCode
          /> */}

          <StripePayment price={totalPrice} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Index
