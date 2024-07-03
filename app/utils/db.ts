// connect to mongodb using mongoose

import mongoose from 'mongoose';

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const DATABASE = process.env.MONGO_DB;

const  MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nwhesqu.mongodb.net/${DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(MONGO_URI);
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}
).catch((error) => {
  console.log('Error connecting to MongoDB', error);
});