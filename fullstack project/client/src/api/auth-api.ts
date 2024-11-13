import {
  LoginValues,
  RegistrationValues,
  ServerUser,
  mapUser,
} from '@types';
import { isAxiosError } from 'axios';
import { axiosInstance } from './axios-instance';

type RegisterResponse = {
  message: string;
};

const registrationErrorMessage = 'registration failed';

export const register = async (values: RegistrationValues) => {
  try {
    const response = await axiosInstance.post<RegisterResponse>('auth/register', values);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message ?? registrationErrorMessage);
    }
    throw new Error(registrationErrorMessage);
  }
};

type LoginResponse = {
  status: string;
  token: string;
  user: ServerUser;
};
export const login = async (values: LoginValues) => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>('auth/login', values);

    return {
      token: data.token,
      user: mapUser(data.user),
    };
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message ?? registrationErrorMessage);
    }
    throw new Error(registrationErrorMessage);
  }
};
