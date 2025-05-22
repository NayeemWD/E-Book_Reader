import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';

const app: Application = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!');
// });

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

export default app;
