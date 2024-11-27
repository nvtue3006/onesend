import type { NextApiRequest, NextApiResponse } from 'next';
// import { runCronJob } from '../../path/to/cronJob';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // await runCronJob();
    res.status(200).send('Cron job executed successfully!');
}
