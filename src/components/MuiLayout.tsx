import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
        <Stack sx={{ border: '1px solid' }} direction='row' spacing={2} divider={<Divider orientation="vertical" flexItem />} >
            <Box sx={{
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                height: '100px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: '#333',
                }
            }}>
                Abu
            </Box>
            <Box display='flex' width='100px' height='100px' bgcolor='red' p={2}>

            </Box>
        </Stack>
        <Grid container my={4} rowSpacing={2} columnSpacing={2} >
            <Grid item md={6}>
                <Box bgcolor='black' p={4}>Box 1</Box>
            </Grid>
            <Grid item md={6}>
                <Box bgcolor='black' p={4}>Box 2</Box>
            </Grid>
            <Grid item md={6}>
                <Box bgcolor='black' p={4}>Box 3</Box>
            </Grid>
            <Grid item md={6}>
                <Box bgcolor='black' p={4}>Box 4</Box>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default MuiLayout
