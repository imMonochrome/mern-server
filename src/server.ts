import mongoose from 'mongoose';
import Logging from './api/v1/library/logging';
import { database } from './config/database.config';
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(`Server running at 3000 ${3000}`);
});

/**
 * Connect to Mongo
 */
mongoose
    .connect(database.mongodb.uri, {retryWrites: true, w: 'majority'})
    .then(() => {
        Logging.info('Connected to Database')
    })
    .catch((error: any) => Logging.error(`Error`));