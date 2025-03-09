const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
const cacheMiddleware = {
    //Get dat from cache
    get:async(key) => {
        return cache.get(key);
    },
    //Set the data to cache
    set:async(key,value) => {
        return cache.set(key,value);
    },
    //Delete data from cache
    delete:async(key) => {
        return cache.del(key);
    }
};

module.exports = cacheMiddleware;