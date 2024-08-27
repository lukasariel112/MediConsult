import { Request, Response } from 'express';
import pool from '../config/db';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const conn = await pool.getConnection();
    const result = await conn.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    );

    conn.release();

    if (result.length > 0) {
      res.status(200).json({ message: 'Login successful', user: result[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
