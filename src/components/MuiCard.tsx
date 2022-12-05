import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"

const MuiCard = () => {
    return (
        <Box width='320px'>
            <Card>
                <CardMedia component='img' height='140px' image='https://source.unsplash.com/random' alt='Unsplash random image' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>React</Typography>
                    <Typography variant="body2" color='text.secondary' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut debitis odit illum magnam obcaecati rerum recusandae molestiae a vitae quod? Voluptatem, expedita minus. Eum totam eos labore minus similique?</Typography>
                    <CardActions>
                        <Button size="small" variant="outlined" >Share Now</Button>
                        <Button size="small" variant="contained" >Learn More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    )
}

export default MuiCard
