import { NextApiRequest, NextApiResponse } from 'next';
import mysql, { Pool } from 'mysql2/promise';

const db: Pool = mysql.createPool({
  host: 'localhost',
  user: 'mysql_user',
  password: 'mysql_password',
  database: 'database',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, amount } = req.body;
    try {
      const connection = await db.getConnection();
      try {
        const [result] = await connection.execute(
          'INSERT INTO donations (name, email, amount) VALUES (?, ?, ?)',
          [name, email, amount]
        );
        res.status(200).json({ message: 'Donation successful!' });
      } finally {
        connection.release();
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing donation', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
