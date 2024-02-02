import 'dotenv/config';
import { api } from './app/app';

console.log(process.env.APP_NAME);

const PORT: number = Number(process.env.PORT);

api()
  .then(app => app.listen(PORT))
  .then(() => { console.log(`App is running on port: ${PORT}`); });
