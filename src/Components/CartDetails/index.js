import { CloudDoneSharp } from '@mui/icons-material'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
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

  const data = useSelector((state) => state.addToCart)
  console.log('dataReducer', data)

  const removeItemFomCart = (item) => {
    dispatch(removeItem())
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        {data?.items.map((item) => {
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
                    onClick={() => removeItemFomCart(item)}
                  >
                    <CloseIcon />
                  </Box>
                </Grid>
              </Grid>
            </>
          )
        })}
        <Grid item container>
          <Grid item xs={2}>
            <Button variant="contained" className={classes.saveBtn}>
              Save
            </Button>
          </Grid>
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
    </Grid>
  )
}

export default Index
