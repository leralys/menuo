import {
  OutlinedInput,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from '@mui/material';

import { SelectMenuStyle } from '../select.styles';
import { InputLabel } from '@mui/material';

export interface IMultipleSelectProps {
  items: string[];
  value: string[];
  handleChange: any;
  placeholder?: string;
  sx?: {};
  required?: boolean;
}

const MultipleSelect = ({
  items,
  value,
  handleChange,
  placeholder = 'Select',
  sx,
  required = false,
}: IMultipleSelectProps) => {
  return (
    <FormControl sx={sx && sx} required={required}>
      <InputLabel id='multi-select-label'>{placeholder}</InputLabel>
      <Select
        labelId='multi-select-label'
        id='multi-select'
        label={placeholder}
        multiple
        value={value}
        onChange={(e) => handleChange(e)}
        input={<OutlinedInput label={placeholder} />}
        renderValue={(selected) => selected.join('/')}
        MenuProps={SelectMenuStyle}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={value.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
