import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import { useState } from "react"

export const MuiRadio = () => {
    const [value, setValue] = useState('')
    console.log(value)
    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Year of experience 
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={(e) => {setValue(e.target.value)}} row>
                    <FormControlLabel control={<Radio size='small' color='secondary' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio size='small' color='secondary' />} label='2-4' value='2-4' />
                    <FormControlLabel control={<Radio size='small' color='secondary' />} label='4-6' value='4-6' />
                </RadioGroup>
                <FormHelperText>Invalid selection.</FormHelperText>
            </FormControl>
        </Box>
    )
}
