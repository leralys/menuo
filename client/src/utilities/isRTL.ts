import { TextDirEnum } from '../utilities/types/enums';

export interface IRTLCheck {
  isRTL: boolean;
  textDir: string;
}

export const isRTLTest = (checkString: string): boolean => {
  const rtlChars = '\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC';
  const rtlDirCheck = new RegExp('^[^' + rtlChars + ']*?[' + rtlChars + ']');
  return rtlDirCheck.test(checkString);
};

export const textDirection = (result: boolean): string => {
  return result ? TextDirEnum.RTL : TextDirEnum.LTR;
};

export const isRTLCheck = (checkString: string): IRTLCheck => {
  const isRTL = isRTLTest(checkString);
  const textDir = textDirection(isRTL);
  return { isRTL, textDir };
};
