import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { makeStyles } from '@mui/styles'
import MainHeadrer from '../Components/MainHeadrer'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles(() => ({
  mainList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    // backgroundColor: "#333333",
  },
  listItem: {
    display: 'inline-flex !important',
  },
  bgImg:{
    backgroundImage: "url('https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f25c4e460d97bb8aec2_6002086f72b727312201e451_ecommerce-website-design-examples.jpeg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100vh"
  }
}))

const Home = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <MainHeadrer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.bgImg} >
          <Button
        //   sx={{display:"flex", justifyContent:"center"}}
            variant="contained"
            onClick={() => {
              navigate('/shop')
            }}
          >
            Shop Now!
          </Button>
        </Grid>
      </Grid>
    </MainHeadrer>
  )
}

export default Home
