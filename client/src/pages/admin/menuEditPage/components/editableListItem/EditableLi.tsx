import { useState } from 'react';
import { TextField, IconButton, ClickAwayListener } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { BulletPoint } from '../../../../../styles/sharedStyles';
import { ListContentWrapper } from './editableLi.styles';
import COLORS from '../../../../../styles/colors';
import { IRTLCheck } from '../../../../../utilities/isRTL';

export interface IEditableLiProps {
  item: string;
  id: number;
  handleRemoveItem: (id: number) => void;
  handleUpdateItem: (id: number, newVal: string) => void;
  isRTLText: IRTLCheck;
}

const EditableListItem = ({
  item,
  id,
  isRTLText,
  handleRemoveItem,
  handleUpdateItem,
}: IEditableLiProps) => {
  const [inlineEdit, setInlineEdit] = useState<string>(item);

  const handleInlineChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInlineEdit(e.target.value);
  };

  const checkBeforeUpdate = (id: number, newVal: string) => {
    if (newVal === item) return;
    if (newVal === '') {
      handleRemoveItem(id);
    } else {
      handleUpdateItem(id, inlineEdit);
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkBeforeUpdate(id, inlineEdit);
    }
  };

  return (
    <ClickAwayListener onClickAway={(e) => checkBeforeUpdate(id, inlineEdit)}>
      <li>
        <ListContentWrapper isRTLText={isRTLText}>
          <BulletPoint />
          <TextField
            multiline
            onChange={(e) => handleInlineChange(e)}
            onKeyPress={(e) => handleEnterKeyPress(e)}
            variant='standard'
            value={inlineEdit}
            sx={{ width: '90%' }}
            dir={isRTLText.textDir}
          />
          <IconButton
            onClick={() => handleRemoveItem(id)}
            component='span'
            sx={{ padding: 'none', color: COLORS.moveoRed }}
          >
            <ClearRoundedIcon />
          </IconButton>
        </ListContentWrapper>
      </li>
    </ClickAwayListener>
  );
};

export default EditableListItem;
