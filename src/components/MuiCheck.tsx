import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MuiCheck = () => {
    const [value, setValue] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1) {
            setSkills([...skills, event.target.value])
        }
        else {
            setSkills(skills.filter((skill) => skill !== event.target.value ))
        }
    }

    console.log(skills)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    } 

    return (
        <Box>
            <Box>
                <FormControlLabel label='I accept the terms and conditions' control={<Checkbox size="small" color="secondary" checked={value} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={value} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                    <FormControlLabel label='HTML' value='HTML' control={<Checkbox size="small" color="secondary" checked={skills.includes('HTML')} onChange={handleSkillsChange} />} />
                    <FormControlLabel label='CSS' value='CSS' control={<Checkbox size="small" color="secondary" checked={skills.includes('CSS')} onChange={handleSkillsChange} />} />
                    <FormControlLabel label='JavaScript' value='JavaScript' control={<Checkbox size="small" color="secondary" checked={skills.includes('JavaScript')} onChange={handleSkillsChange} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheck