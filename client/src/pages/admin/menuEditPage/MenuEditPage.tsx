import { useState, useEffect, useCallback } from 'react';
import MenuEditNav from './components/menuEditNav/MenuEditNav';
import AddNewMenuItem from './components/addNewMenuItem/AddNewListItem';
import NewMenuList from './components/menuList/MenuList';

import { postMenuForADay, getMenuForADay } from '../../../services/menuService';
import { IRTLCheck } from '../../../utilities/isRTL';
import { DateInputType } from '../../../utilities/types/types';
import { isRTLCheck } from '../../../utilities/isRTL';
import { notify } from '../../../utilities/notifyWithToast';
import { formatDate, formatToISO } from '../../../utilities/dateHelpers';
import {
  ErrorVariantsEnum,
  TextDirEnum,
  ApiResStatusEnum,
  MenuOrScheduleEnum,
} from '../../../utilities/types/enums';

import {
  StyledAdminPageContainer,
  StyledMainButton,
} from '../../../styles/sharedStyles';
import { FinishButtonsPaper } from '../scheduleWeeklyCreate/scheduleWeeklyCreate.styles';
import COLORS from '../../../styles/colors';

export interface IMenuEditProps {
  location: MenuOrScheduleEnum;
}

const MenuEdit = ({ location }: IMenuEditProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<DateInputType>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [menuList, setMenuList] = useState<string[]>([]);
  const [isRTLText, setIsRTLText] = useState<IRTLCheck>({
    isRTL: true,
    textDir: TextDirEnum.RTL,
  });

  useEffect(() => {
    if (menuList.length > 0) {
      setIsRTLText(isRTLCheck(menuList[0]));
    }
  }, [menuList]);

  useEffect(() => {
    if (selectedDate) {
      const fetchMenu = async () => {
        try {
          const res = await getMenuForADay(formatToISO(selectedDate));
          if (res === ErrorVariantsEnum.NO_MENU) {
            setMenuList([]);
          } else {
            setMenuList(res.data.menu);
          }
        } catch (err) {
          notify.error('Something went wrong ...');
        }
      };
      fetchMenu();
    }
  }, [selectedDate]);

  const isItems = menuList.length > 0 ? true : false;

  const handleDateChange = (newValue: DateInputType) => {
    setSelectedDate(newValue);
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  const addNewToList = (item: string) => {
    setMenuList((menuList) => [...menuList, item]);
  };

  const handleRemoveItem = (id: number) => {
    const newMenuList = menuList.filter((item, index) => index !== id);
    setMenuList(newMenuList);
  };

  const handleUpdateItem = (index: number, newItem: string) => {
    const newMenuList = [...menuList];
    newMenuList[index] = newItem;
    setMenuList(newMenuList);
  };

  const addNewMenuItem = (
    e: MouseEvent | TouchEvent | React.KeyboardEvent,
    value: string
  ) => {
    if (value !== '') {
      addNewToList(value);
      clearInput();
    }
  };

  const handleClear = () => {
    setMenuList([]);
  };

  const handleSaveMenu = useCallback(async () => {
    if (selectedDate) {
      const params = {
        selectedDate,
        menuList,
      };
      try {
        const res = await postMenuForADay(params);
        if (res.status === ApiResStatusEnum.SUCCESS) {
          notify.success(
            `The menu for ${formatDate(selectedDate)} is saved successfully`
          );
        }
      } catch (err) {
        notify.error('Sorry, service unavailable, try again later');
      }
    }
  }, [menuList, selectedDate]);

  return (
    <>
      <MenuEditNav
        toggleDatePicker={toggleDatePicker}
        handleDateChange={handleDateChange}
        isDatePickerOpen={isDatePickerOpen}
        selectedDate={selectedDate}
        setIsDatePickerOpen={setIsDatePickerOpen}
        location={location}
      />
      <StyledAdminPageContainer>
        {selectedDate && (
          <>
            <AddNewMenuItem
              handleChange={handleInputChange}
              addNew={addNewMenuItem}
              inputValue={inputValue}
              isRTLText={isRTLText}
            />
            {isItems && (
              <NewMenuList
                items={menuList}
                handleRemoveItem={handleRemoveItem}
                handleUpdateItem={handleUpdateItem}
                isRTLText={isRTLText}
              />
            )}
          </>
        )}
        {selectedDate && (
          <FinishButtonsPaper elevation={3}>
            <StyledMainButton
              variant='contained'
              onClick={handleClear}
              sx={{
                justifySelf: 'flex-end',
                background: `${COLORS.moveoRed} !important`,
              }}
            >
              Clear
            </StyledMainButton>
            <StyledMainButton
              disabled={selectedDate ? false : true}
              variant='contained'
              onClick={handleSaveMenu}
              sx={{ justifySelf: 'flex-end' }}
            >
              Save
            </StyledMainButton>
          </FinishButtonsPaper>
        )}
      </StyledAdminPageContainer>
    </>
  );
};

export default MenuEdit;
