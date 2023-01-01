import { Box } from '@mui/material'
import React from 'react'
import MainHeadrer from '../Components/MainHeadrer'
import ThreeJsAnimation from '../Components/ThreeJsAnimation'

const Contact = () => {
  return (
    <MainHeadrer>
      Contact
      <Box sx={{ height: 200 }}>
        <ThreeJsAnimation />
      </Box>
    </MainHeadrer>
  )
}

export default Contact
