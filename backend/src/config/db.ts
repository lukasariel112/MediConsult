import { createPool } from 'mariadb';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'appointment_system',
  connectionLimit: 5
});

export default pool;