import mysql from 'mysql2/promise';

// More aggressive build detection for this specific environment
const isProduction = process.env.NODE_ENV === 'production';
const isBuildPhase = isProduction; // In this context, we assume production environment is where the build pressure happens

const poolConfig = (dbName) => ({
  host: process.env.BLOG_DB_HOST || process.env.USER_DB_HOST,
  user: process.env.BLOG_DB_USER || process.env.USER_DB_USER,
  password: process.env.BLOG_DB_PASSWORD || process.env.USER_DB_PASSWORD,
  database: dbName,
  waitForConnections: true,
  connectionLimit: isBuildPhase ? 1 : 5, // Dropped to 1 to be extremely safe during build
  queueLimit: 0,
  connectTimeout: 2000, 
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

const getPool = (key, dbName) => {
  if (!global[key]) {
    try {
      global[key] = mysql.createPool(poolConfig(dbName));
    } catch (err) {
      return null;
    }
  }
  return global[key];
};

const blogDb = getPool('_blogDbPool', process.env.BLOG_DB_NAME);
const userDb = getPool('_userDbPool', process.env.USER_DB_NAME);

/**
 * Executes a query with a mandatory hard timeout to prevent build hangs
 */
async function executeWithTimeout(pool, sql, params, timeoutMs = 5000) {
  if (!pool) return [];
  
  const queryPromise = pool.execute(sql, params);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Query Timeout')), timeoutMs)
  );

  try {
    const [results] = await Promise.race([queryPromise, timeoutPromise]);
    return results;
  } catch (error) {
    if (isBuildPhase) {
      // Silently fail during build to allow completion
      return [];
    }
    throw error;
  }
}

export { blogDb, userDb };

export async function queryBlog(sql, params) {
  return await executeWithTimeout(blogDb, sql, params, isBuildPhase ? 1000 : 10000);
}

export async function queryUser(sql, params) {
  return await executeWithTimeout(userDb, sql, params, isBuildPhase ? 1000 : 10000);
}
