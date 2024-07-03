import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  selfie: string;
  surname: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  selfie: { type: String, required: false },
  surname: { type: String, required: true }
});

export const User = mongoose.model<IUser>('User', UserSchema);

