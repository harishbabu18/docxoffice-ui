import React, {useState} from "react"; 
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import RolesAutocomplete from './RoleAutocomplete';
import Grid from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserForm() {
  const [startDate, setStartDate] = useState(new Date());
  const newdate = (val) =>{
    setStartDate(val);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="NAME" name="name" variant="outlined"  fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="username" name="name" variant="outlined" fullWidth />
     
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField id="outlined-basic" label="password" name="name" variant="outlined" fullWidth />

        </Grid>
        <Grid item xs={12} md={4}>
           <TextField id="outlined-basic" label="PAN" name="name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={4}>
         <TextField id="outlined-basic" label="TAN" name="name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={4}>
         <TextField id="outlined-basic" label="GST" name="name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
    <MobileDatePicker
          label="Date"
          value={startDate}
          onChange={newdate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained">optionalFields</Button>
      </Grid>
      <Grid item xs={12}>
      <RolesAutocomplete />
        </Grid>

      <Grid item xs={12} md={6}>
      <Button variant="contained">Address</Button>
      </Grid>
      <Grid item xs={12} md={6}>
      <Button variant="contained">Bank Details</Button>
      </Grid>

      <Grid item xs={12} md={6}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="enabled" />
      </Grid>
      <Grid item xs={12} md={6}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="accountExpired" />
      </Grid>
      <Grid item xs={12} md={6}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="accountLocked" />
      </Grid>
      <Grid item xs={12} md={6}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="passwordExpired" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained">SAVE</Button>
      </Grid>
      <Grid item xs={12} md={6}>
      <Button variant="contained">CLEAR</Button>
      </Grid>


      </Grid>
    <div>
    </div>
    </FormGroup>
    </Box>
  )
}
