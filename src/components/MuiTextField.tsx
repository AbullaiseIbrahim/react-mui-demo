import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant="standard" />
                <TextField label='Name' variant="filled" />
                <TextField label='Name' variant="outlined" />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='password' type='password' required variant="standard" size="small" color='secondary' value={value} error={!value} onChange={(e)=> { setValue(e.target.value)} } helperText={!value ? 'Required' : 'Do not share your password.'} />
                <TextField label='Name' variant="filled" helperText='Do not share you password' />
                <TextField label='Name' variant="outlined" />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='salary' color='secondary' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,}} />
                <TextField label='wieght' variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,}} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField
