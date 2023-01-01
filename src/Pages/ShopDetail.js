import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MainHeadrer from '../Components/MainHeadrer'
import { data } from '../Components/utils/data'
import { addCartData } from '../redux/actionAndReducer/AddToCart'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


const ShopDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [productItem, setProductItem] = useState([])

    const handleAddToCart = (e, elm) => {

        dispatch(addCartData(elm))
    }

    useEffect(() => {
        let x = data.filter((item) => item.id == id)
        setProductItem(x)
    }, [])


    console.log('productItem', productItem)
    return (
        <MainHeadrer>
            <Grid container my={4}>
                {productItem?.map((item) => {
                    return (
                        <>
                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                                <img src={item.image} height={400} />
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={3}>
                                    <Typography variant='h5'>{item.name}</Typography>
                                    <Typography>{item.description}</Typography>
                                    <Typography>${item.price}</Typography>
                                    <Stack direction="row">
                                        <Button onClick={(e) => handleAddToCart(e, item)} sx={{ alignSelf: "flex-start" }}>Add to Cart</Button>
                                        <IconButton>
                                            <CameraAltOutlinedIcon />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </>
                    )
                })}

            </Grid>
        </MainHeadrer>
    )
}

export default ShopDetail
