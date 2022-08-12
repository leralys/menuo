import NewMenuItem from '../editableListItem/EditableLi';
import { IRTLCheck } from '../../../../../utilities/isRTL';
import { StyledUL } from '../../../../../styles/sharedStyles';

export interface INewMenuList {
  items: string[];
  handleRemoveItem: (id: number) => void;
  handleUpdateItem: (id: number, newVal: string) => void;
  isRTLText: IRTLCheck;
}

const NewMenuList = ({
  items,
  handleRemoveItem,
  isRTLText,
  handleUpdateItem,
}: INewMenuList) => {
  return (
    <StyledUL isRTLText={isRTLText}>
      {items.map((item, index) => (
        <NewMenuItem
          item={item}
          isRTLText={isRTLText}
          key={`${item}-${Math.random().toFixed(5)}`}
          id={index}
          handleRemoveItem={handleRemoveItem}
          handleUpdateItem={handleUpdateItem}
        />
      ))}
    </StyledUL>
  );
};
export default NewMenuList;
