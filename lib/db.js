import mysql from 'mysql2/promise';

const poolConfig = (dbName) => ({
  host: process.env.BLOG_DB_HOST || process.env.USER_DB_HOST,
  user: process.env.BLOG_DB_USER || process.env.USER_DB_USER,
  password: process.env.BLOG_DB_PASSWORD || process.env.USER_DB_PASSWORD,
  database: dbName,
  waitForConnections: true,
  connectionLimit: 5, // Reduced to prevent overflow in dev
  queueLimit: 0,
  connectTimeout: 10000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Use global to prevent multiple pools in development (Hot Module Replacement)
let blogDb;
let userDb;

if (process.env.NODE_ENV === 'production') {
  blogDb = mysql.createPool(poolConfig(process.env.BLOG_DB_NAME));
  userDb = mysql.createPool(poolConfig(process.env.USER_DB_NAME));
} else {
  if (!global._blogDbPool) {
    global._blogDbPool = mysql.createPool(poolConfig(process.env.BLOG_DB_NAME));
  }
  if (!global._userDbPool) {
    global._userDbPool = mysql.createPool(poolConfig(process.env.USER_DB_NAME));
  }
  blogDb = global._blogDbPool;
  userDb = global._userDbPool;
}

export { blogDb, userDb };

export async function queryBlog(sql, params) {
  const [results] = await blogDb.execute(sql, params);
  return results;
}

export async function queryUser(sql, params) {
  const [results] = await userDb.execute(sql, params);
  return results;
}
