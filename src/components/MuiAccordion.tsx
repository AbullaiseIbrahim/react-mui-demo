import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')} >
                <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon/>} >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam quis iusto laboriosam corporis impedit, dignissimos architecto vitae quidem. Laudantium odit nemo ducimus ipsum quis fugiat reiciendis aut quas aliquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')} >
                <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon/>} >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam quis iusto laboriosam corporis impedit, dignissimos architecto vitae quidem. Laudantium odit nemo ducimus ipsum quis fugiat reiciendis aut quas aliquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')} >
                <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon/>} >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam quis iusto laboriosam corporis impedit, dignissimos architecto vitae quidem. Laudantium odit nemo ducimus ipsum quis fugiat reiciendis aut quas aliquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')} >
                <AccordionSummary id="panel4-header" aria-controls="panel4-content" expandIcon={<ExpandMoreIcon/>} >
                    <Typography>Accordion 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam quis iusto laboriosam corporis impedit, dignissimos architecto vitae quidem. Laudantium odit nemo ducimus ipsum quis fugiat reiciendis aut quas aliquam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAccordion
