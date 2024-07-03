import { IUser, User } from '../models/User';

export const createUser = async (payload: IUser) => {
  const user = new User(payload);

  return user.save();
};

export const updateUser = async (id: string, payload: IUser) => {
  return User.findByIdAndUpdate({ _id: id }, payload, { new: true });
};