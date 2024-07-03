import { getHealth } from '../controllers/health';
import { uploadSelfie } from '../controllers/selfie';
import { createUser } from '../controllers/user';

export const routes = {
  getHealth,
  uploadSelfie,
  createUser
};