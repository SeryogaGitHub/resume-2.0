import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'resume_portfolio',
  user: 'postgres',
  password: 'server123456'
});