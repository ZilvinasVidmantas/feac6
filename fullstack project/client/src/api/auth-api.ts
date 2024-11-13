import {
  LoginValues,
  RegistrationValues,
  ServerUser,
  mapUser,
} from '@types';
import { axiosInstance } from './axios-instance';

type RegisterResponse = {
  message: string;
};

export const register = async (values: RegistrationValues) => {
  const { data } = await axiosInstance.post<RegisterResponse>('auth/register', values);

  // TODO: Handle errors
  return data;
};

type LoginResponse = {
  status: string;
  token: string;
  user: ServerUser;
};

export const login = async (values: LoginValues) => {
  const { data } = await axiosInstance.post<LoginResponse>('auth/register', values);

  // TODO: Handle errors
  return {
    token: data.token,
    user: mapUser(data.user),
  };
};
