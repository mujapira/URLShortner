import express from 'express';
import { Request, Response } from 'express';

const api = express();

api.get('/test', (req: Request, res: Response) => {
    res.json({ sucess: true })
})
api.listen(3000, () => console.log('toma'));