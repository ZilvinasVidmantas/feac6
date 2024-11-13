export type ServerCategory = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export const mapCategory = (serverCategory: ServerCategory): Category => ({
  id: serverCategory._id,
  name: serverCategory.name,
  createdAt: new Date(serverCategory.createdAt),
  updatedAt: new Date(serverCategory.updatedAt),
});
