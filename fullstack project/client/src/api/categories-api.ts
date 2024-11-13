import { mapCategory, ServerCategory } from '@types';
import { axiosInstance } from './axios-instance';

export const getCategories = async () => {
  const { data } = await axiosInstance.get<ServerCategory[]>('categories');

  return data.map(mapCategory);
};
