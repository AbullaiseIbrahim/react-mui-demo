import { Stack, Rating } from "@mui/material"
import React, { useState } from "react"

export const MuiRating = () => {
    const [rating, setRating] = useState(null)
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRating(newValue)
    }
    console.log(rating)

    return (
        <Stack spacing={2}>
            <Rating value={rating} onChange={handleChange} precision={0.5} />
        </Stack>
    )
}
