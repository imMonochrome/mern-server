import mongoose from 'mongoose';
import { database } from './config/database.config';
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(`Server running at 3000 ${3000}`);
});

mongoose
    .connect(database.mongodb.uri, {retryWrites: true, w: 'majority'})
    .then(() => {
        console.log('Connection success!');
    })
    .catch((err: any) => console.error('Error connection:', err));