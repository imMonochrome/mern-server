import dotenv from 'dotenv'

dotenv.config()

/**
 * Configs in .env file
 */
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.w8jwosy.mongodb.net/?retryWrites=true&w=majority`;
const MONGO_PORT = process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 1337;
console.log("MONGO_USERNAME::", MONGO_USERNAME);

export const database = {
    mongodb: {
        // configs ...
        uri: MONGO_URI
    },
    server: {
        port: MONGO_PORT
    }
};
