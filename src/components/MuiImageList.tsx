import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material"

const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList sx={{width: '500px', height: '450px'}} cols={3} rowHeight={165} >
                {
                    itemData.map(item => (
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}?w=164&h=164&fit=cope&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                            <ImageListItemBar title={item.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>

            <ImageList variant='woven' sx={{width: '500px', height: '450px'}} cols={3} gap={8} >
                {
                    itemData2.map(item => (
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}?w=164&h=164&fit=cope&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                        </ImageListItem>
                    ))
                }
            </ImageList>

            <Box sx={{width: '500px', height: '450px', overflowY: 'scroll' }} >
                <ImageList variant='masonry' cols={3} rowHeight={165} gap={8} >
                    {
                        itemData3.map(item => (
                            <ImageListItem key={item.img}>
                                <img src={`${item.img}?w=248&fit=cope&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
        </Stack >
    )
}

export default MuiImageList

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    }
]

const itemData2 = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    }
]

const itemData3 = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera'
    }
]