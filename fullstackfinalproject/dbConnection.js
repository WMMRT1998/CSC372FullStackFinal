// dbConnection.js
import pg from 'pg';
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

await pool.query(`CREATE TABLE IF NOT EXISTS worktest (
id SERIAL PRIMARY KEY,
teamLeader TEXT NOT NULL,
press TEXT,
date DATE DEFAULT CURRENT_DATE,
crew TEXT
)`);

export default pool;
