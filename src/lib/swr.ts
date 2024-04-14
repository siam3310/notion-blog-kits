import axios from 'axios';

export const fetcher = async <T>(url: string) => {
  return await axios.get<IResponseSuccess<T>>(url).then((res) => {
    if (!res.data.success) {
      throw 'fail';
    }
    return res.data.result;
  });
};

export interface IResponseSuccess<T> {
  success: boolean;
  result: T;
}
