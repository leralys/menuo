import { ClickAwayListener } from '@mui/material/';
import { IRTLCheck } from '../../../../../utilities/isRTL';
import { InputStyled } from './addNewListItem.styles';

export interface IAddNewItemProps {
  addNew: (
    e: MouseEvent | TouchEvent | React.KeyboardEvent,
    value: string
  ) => void;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRTLText: IRTLCheck;
}

const AddNewMenuItem = ({
  addNew,
  inputValue,
  handleChange,
  isRTLText,
}: IAddNewItemProps) => {
  const handleEnterKeyPress = (e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter') {
      addNew(e, value);
    }
  };

  return (
    <ClickAwayListener onClickAway={(e) => addNew(e, inputValue)}>
      <InputStyled
        dir={isRTLText.textDir}
        className='text-italic'
        autoFocus
        onChange={handleChange}
        value={inputValue}
        onKeyPress={(e) => handleEnterKeyPress(e, inputValue)}
        disableUnderline
        placeholder='הוסף מנה'
        sx={{ padding: '0.5rem' }}
      />
    </ClickAwayListener>
  );
};

export default AddNewMenuItem;
