import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
import CartDetails from '../Components/CartDetails'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WishlistDetails from '../Components/WihlistDetails'

const navLocation = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const useStyle = makeStyles(() => ({
  ul: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    // backgroundColor: "#333333"
  },
  li: {
    float: 'left',
    // display: "flex"
  },
  a: {
    display: 'block',
    // color: "white",
    textAlign: 'center',
    padding: '16px',
    textDecoration: 'none',
  },
  webLogo: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
  typo: {
    // transform: "rotate(-20deg)",
  },
  typo2: {
    // transform: "rotate(-20deg)",
    // transform: "translate(-34px,36px)"
  },
}))

const MainHeadrer = (props) => {
  const classes = useStyle()

  const dataredux = useSelector((state) => state.addToCart)

  const [toggleCart, setToggleCart] = useState(false)
  const [toggleWishlist, setToggleWishlist] = useState(false)

  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid item container alignItems="center">
            <Grid item xs={3} className={classes.webLogo}>
              <Typography className={classes.typo} variant="h4">
                E-commerce
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ul className={classes.ul}>
                {navLocation.map((item) => {
                  return (
                    <li className={`${classes.li} ${classes.a}`}>
                      <Link to={item.path} className={classes.a}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Badge
                sx={{ marginRight: 2 }}
                badgeContent={dataredux.wishlist}
                color="primary"
                // onClick={toggleDrawer('right', true)}
                onClick={() => {
                  setToggleWishlist(true)
                  setToggleCart(false)
                }}
              >
                <FavoriteIcon color="action" />
              </Badge>
              <Badge
                badgeContent={dataredux.cart}
                color="primary"
                // onClick={toggleDrawer('right', true)}
                onClick={() => {
                  setToggleCart(true)
                  setToggleWishlist(false)
                }}
              >
                <ShoppingCartIcon color="action" />
              </Badge>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {toggleCart ? (
            <CartDetails setToggleCart={setToggleCart}  />
          ) : toggleWishlist ? (
            <WishlistDetails setToggleWishlist={setToggleWishlist} />
          ) : (
            props.children
          )}
          {/* {props.children} */}
        </Grid>
      </Grid>
    </>
  )
}

export default MainHeadrer
