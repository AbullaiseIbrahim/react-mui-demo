import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }} >
            <Table aria-label='simple table' stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MuiTable

const tableData = [
    {
        "id": 1,
        "first_name": "Miran",
        "last_name": "Barby",
        "email": "mbarby0@dot.gov"
    }, 
    {
        "id": 2,
        "first_name": "Reggis",
        "last_name": "Tennet",
        "email": "rtennet1@seesaa.net"
    }, 
    {
        "id": 3,
        "first_name": "Gus",
        "last_name": "Freshwater",
        "email": "gfreshwater2@exblog.jp"
    }, 
    {
        "id": 4,
        "first_name": "Elisha",
        "last_name": "Brewitt",
        "email": "ebrewitt3@guardian.co.uk"
    }, 
    {
        "id": 5,
        "first_name": "Farris",
        "last_name": "Hares",
        "email": "fhares4@163.com"
    }, 
    {
        "id": 6,
        "first_name": "Nora",
        "last_name": "Clelland",
        "email": "nclelland5@imgur.com"
    }, 
    {
        "id": 7,
        "first_name": "Menard",
        "last_name": "Measures",
        "email": "mmeasures6@nymag.com"
    }, 
    {
        "id": 8,
        "first_name": "Nikos",
        "last_name": "Backhurst",
        "email": "nbackhurst7@furl.net"
    }, 
    {
        "id": 9,
        "first_name": "Meade",
        "last_name": "Timlin",
        "email": "mtimlin8@fotki.com"
    }, 
    {
        "id": 10,
        "first_name": "Lew",
        "last_name": "Kirkhouse",
        "email": "lkirkhouse9@arizona.edu"
    }
]