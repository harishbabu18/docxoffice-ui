import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RolesAutocomplete from './RoleAutocomplete';

export default function UserForm() {
  return (
    <div>
      <TextField id="outlined-basic" label="NAME" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="PAN" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="TAN" name="name" variant="outlined" />

      <TextField id="outlined-basic" label="GST" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="startDate" name="startDate" variant="outlined" />
      <TextField id="outlined-basic" label="optionalFields" name="optionalFields" variant="outlined" />

      <RolesAutocomplete />
      <TextField id="outlined-basic" label="address" name="address" variant="outlined" />
      <TextField id="outlined-basic" label="bank" name="bank" variant="outlined" />

      <TextField id="outlined-basic" label="username" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="password" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="enabled" name="name" variant="outlined" />

      <TextField id="outlined-basic" label="accountExpired" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="accountLocked" name="name" variant="outlined" />
      <TextField id="outlined-basic" label="passwordExpired" name="name" variant="outlined" />
    </div>
  )
}
