import pg from 'pg';
const { Client } = pg;

const client = new Client({
  host: 'aws-0-ap-northeast-1.pooler.supabase.com',
  port: 5432,
  database: 'postgres',
  user: 'postgres.omrjdzgnfnpggrilzxxe',
  password: 'MEDTRACK@SIH2026',
});

client.connect()
  .then(() => {
    console.log('Connected to Supabase PostgreSQL successfully!');
    return client.query('SELECT NOW()');
  })
  .then((res) => {
    console.log('Current time from DB:', res.rows[0]);
    client.end();
  })
  .catch((err) => {
    console.error('Connection error', err.stack);
    client.end();
  });
