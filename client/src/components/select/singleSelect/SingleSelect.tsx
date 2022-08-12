import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { SelectMenuStyle } from '../select.styles';

export interface ISingleSelectProps {
  items: any;
  value: any;
  handleChange: (e: SelectChangeEvent) => void;
  placeholder?: string;
  sx?: {};
  required?: boolean;
}

const SingleSelect = ({
  value,
  handleChange,
  items,
  sx,
  placeholder = 'Select',
  required = false,
}: ISingleSelectProps) => {
  return (
    <FormControl sx={sx && sx} required={required}>
      <InputLabel id='select-label'>{placeholder}</InputLabel>
      <Select
        labelId='select-label'
        id='single-select'
        label={placeholder}
        value={value}
        onChange={handleChange}
        MenuProps={SelectMenuStyle}
      >
        {items.map((item: any) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelect;
