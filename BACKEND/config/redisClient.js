import {createClient} from 'redis';
require('dotenv').config();

const redisClient = createClient({  
    host: process.env.REDIS_PORT,
    port: 6380
}); 

// Connection response messages
redisClient.on('error', (err) => console.error('Redis Client Error', err));

await redisClient.connect();
console.log('Redis Client Connected');

export default redisClient;