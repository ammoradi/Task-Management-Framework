import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import mongo from 'connect-mongo';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { MONGODB_URI } from './util/secrets';

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
  // process.exit();
});

export default app;