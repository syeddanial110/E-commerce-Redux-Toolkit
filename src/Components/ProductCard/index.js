import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const index = (props) => {
  const {
    imageSrc,
    productTitle,
    productDescription,
    leftCb,
    rightCb,
    leftBtnTitle,
    rightBtnTitle,
  } = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageSrc}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={leftCb} size="small" {...props}>
          {leftBtnTitle}
        </Button>
        <Button onClick={rightCb} size="small" {...props}>
          {rightBtnTitle}
        </Button>
      </CardActions>
    </Card>
  )
}

export default index
