import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";

export const MuiButton = () => {
    const [format, setFormat] = useState<string | null>(null)
    console.log({format})
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormat: string | null) => {
        setFormat(updatedFormat)
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href="https://google.com">Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<SendIcon/>} onClick={()=> {alert('Clicked.')}}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon/>} disableElevation disableRipple>Send</Button>
                <IconButton color="error" size='large'>
                    <SendIcon/>
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant="contained">
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label="text formatting" value={format} onChange={handleFormatChange}>
                    <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlind' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
