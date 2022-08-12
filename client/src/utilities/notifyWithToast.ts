import toast from 'react-hot-toast';

export const notify = {
  default: (str: string) => toast(str),
  success: (str: string) => toast.success(str),
  error: (str: string) => toast.error(str),
};
