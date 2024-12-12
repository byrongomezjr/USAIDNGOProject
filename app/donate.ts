import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, amount } = req.body;

  try {
    const { data, error } = await supabase
      .from('donation')
      .insert([
        {
          name,
          email,
          amount,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return res.status(200).json({ message: 'Donation successful!', data });
  } catch (error) {
    console.error('Error processing donation:', error);
    return res.status(500).json({
      message: 'Error processing donation',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
