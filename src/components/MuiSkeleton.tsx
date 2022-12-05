import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material"
import { useState, useEffect } from "react"

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    // <Stack spacing={1} width='250px'>
    //   <Skeleton variant="text" />
    //   <Skeleton variant="circular" width='150px' height='150px' />
    //   <Skeleton variant="rectangular" width='450px' height='250px' animation='wave' />
    // </Stack>

    <Box sx={{width:'256px'}} >
      {
        loading ? (
          <Skeleton variant="rectangular" width='256px' height='144px' />
        ) : (
          <img src="https://source.unsplash.com/random/256x144" alt="skeleton" width='256px' height='144px' />
        )
      }
      <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }} >
        {
          loading ? (
            <Skeleton variant="circular" width='40px' height='40px' />
          ) : (
            <Avatar>V</Avatar>
          )
        }
      </Stack>

      <Stack sx={{ width:'80%' }} >
        {
          loading ? (
            <>
              <Typography variant="body1" >
                <Skeleton variant="text" width='100%' />
              </Typography>
              <Typography variant="body2" >
                <Skeleton variant="text" width='100%' />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1" >
                React MUI Tutorial
              </Typography>
            </>
          )
        }
      </Stack>
    </Box>
  )
}
  
export default MuiSkeleton
