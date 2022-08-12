import { ErrorVariantsEnum } from '../../utilities/types/enums';

export interface Urls {
  [key: string]: string;
}

export const urls: Urls = {
  [ErrorVariantsEnum.NOT_FOUND]: `/images/${ErrorVariantsEnum.NOT_FOUND}.jpg`,
  [ErrorVariantsEnum.ERROR]: `/images/${ErrorVariantsEnum.ERROR}.gif`,
  [ErrorVariantsEnum.NO_MENU]: `/images/${ErrorVariantsEnum.NO_MENU}.gif`,
};
