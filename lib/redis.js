import { createClient } from 'redis';

const redisConfig = {
  url: process.env.REDIS_URL || 'redis://localhost:6379'
};

let redisClient;

if (process.env.NODE_ENV === 'production') {
  redisClient = createClient(redisConfig);
  redisClient.connect().catch(err => console.error('Redis Connect Error:', err));
} else {
  if (!global._redisClient) {
    global._redisClient = createClient(redisConfig);
    global._redisClient.connect().catch(err => console.error('Redis Connect Error:', err));
  }
  redisClient = global._redisClient;
}

export default redisClient;

/**
 * Helper to get cached data or fetch from DB
 * @param {string} key Cache key
 * @param {number} ttl Time to live in seconds
 * @param {Function} fetcher Async function to fetch data if cache miss
 */
export async function withCache(key, ttl, fetcher) {
  try {
    if (!redisClient.isOpen) await redisClient.connect();
    
    const cached = await redisClient.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
    
    const freshData = await fetcher();
    if (freshData) {
      await redisClient.setEx(key, ttl, JSON.stringify(freshData));
    }
    return freshData;
  } catch (err) {
    console.error(`Redis Error for key ${key}:`, err);
    // Fallback to fresh data if Redis fails
    return await fetcher();
  }
}
