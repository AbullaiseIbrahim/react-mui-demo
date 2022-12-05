import { Stack } from '@mui/material';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function CustomizeDayPicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    return (
        <Stack spacing={4} sx={{ width: '250px' }} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    showToolbar
                />
            </LocalizationProvider>
        </Stack>
    );
}