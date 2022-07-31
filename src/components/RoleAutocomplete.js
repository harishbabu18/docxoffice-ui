import React,{useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function RolesAutocomplete() {
    const [roles, setRoles] = useState([]);

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("http://localhost:8080/role")
            .then(res => res.json())
            .then(data => setRoles(data))
    }, [])



  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={roles}
      disableCloseOnSelect
      getOptionLabel={(option) => option.authority}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.authority}
        </li>
      )}
      style={{ width: 420 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}


