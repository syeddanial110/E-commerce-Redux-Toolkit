import { CloudDoneSharp } from '@mui/icons-material'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { removeItem } from '../../redux/actionAndReducer/AddToCart'

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
  const { setToggleCart } = props
  const classes = useStyle()
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState()

  const data = useSelector((state) => state.addToCart)
  console.log('dataReducer', data)
  console.log('totalPrice', totalPrice)

  const removeItemFomCart = (index) => {
    dispatch(removeItem(index))
  }

  useEffect(() => {
    let sum = 0
    let add = data.items.reduce((prev = 0, current) => {
      return prev + parseInt(current.price)
    }, sum)
    // let add = data.items.reduce((prev, current) => parseInt(prev.price) + parseInt(current.price), sum)
    setTotalPrice(add)
    console.log('add', add)
  }, [data.items])

  return (
    <Grid container>
      <Grid item xs={8}>
        {data?.items.length > 0 ? data?.items.map((item, i) => {
          return (
            <>
              <Grid item container mt={2} sx={{ border: '1px solid' }}>
                <Grid item xs={3}>
                  <img alt="image" src={item.image} height={150} />
                </Grid>
                <Grid item xs={8}>
                  <Stack justifyContent="space-around" sx={{ height: 150 }}>
                    <Typography>{item.name}</Typography>
                    <Typography>${item.price}</Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Box
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                    onClick={() => removeItemFomCart(i)}
                  >
                    <CloseIcon />
                  </Box>
                </Grid>
              </Grid>
            </>
          )
        }) : (
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
                setToggleCart(false)
              }}
            //   color="white"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ border: "1px solid", }}>
        <Stack spacing={2} sx={{ height: '100% !important' }}>
          {data?.items.map((item) => {
            // let sum = 0
            // sum += parseInt(item.price)
            // setTotalPrice(sum)
            return (
              <>
                <Stack direction="row" justifyContent="space-between" p={2} >
                  <Typography>{item.name}</Typography>
                  <Typography> ${item.price}</Typography>
                </Stack>
              </>
            )

          })}
          <Typography>Total: {totalPrice}</Typography>
          <Button sx={{ justifySelf: "flex-end" }}>Check out</Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Index
