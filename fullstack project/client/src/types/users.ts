export type ServerUser = {
  _id: string;
  name: string;
  age: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  age: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export const mapUser = (serverUser: ServerUser): User => ({
  id: serverUser._id,
  name: serverUser.name,
  age: serverUser.age,
  email: serverUser.email,
  createdAt: new Date(serverUser.createdAt),
  updatedAt: new Date(serverUser.updatedAt),
});
