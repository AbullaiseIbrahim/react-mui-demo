import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"

const MuiSwitch = () => {
    const [value, setValue] = useState(false)
    console.log(value)

    return (
        <Box>
            <FormControlLabel label='Dark mode' control={ <Switch/> } value={value} onChange={(e)=> {setValue(!value)}} />
        </Box>
    )
}

export default MuiSwitch
