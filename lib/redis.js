import { createClient } from 'redis';

const redisConfig = {
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  socket: {
    connectTimeout: 2000 // Stop waiting after 2 seconds
  }
};

const isBuild = process.env.NODE_ENV === 'production';

const getRedisClient = () => {
  if (typeof window !== 'undefined') return null; // Safety for client-side
  
  if (!global._redisClient) {
    try {
      const client = createClient(redisConfig);
      client.on('error', (err) => {
        if (!isBuild) console.error('Redis Client Error:', err.message);
      });
      
      // We don't await this at the top level to avoid blocking the module load
      client.connect().catch((err) => {
        if (!isBuild) console.error('Redis Initial Connect Error:', err.message);
      });
      
      global._redisClient = client;
    } catch (err) {
      return null;
    }
  }
  return global._redisClient;
};

const redisClient = getRedisClient();

export default redisClient;

/**
 * Helper to get cached data or fetch from DB
 */
export async function withCache(key, ttl, fetcher) {
  // If Redis is not initialized or we are in build mode without a connection, skip immediately
  if (!redisClient || (isBuild && !redisClient.isOpen)) {
    return await fetcher();
  }

  try {
    // Check if client is open, if not, try once and move on
    if (!redisClient.isOpen) {
      await Promise.race([
        redisClient.connect(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Redis Timeout')), 1500))
      ]);
    }
    
    const cached = await redisClient.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
    
    const freshData = await fetcher();
    if (freshData && redisClient.isOpen) {
      await redisClient.setEx(key, ttl, JSON.stringify(freshData));
    }
    return freshData;
  } catch (err) {
    // If Redis fails, we ALWAYS fallback to fetcher immediately
    return await fetcher();
  }
}
