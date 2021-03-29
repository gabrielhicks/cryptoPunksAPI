/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { punksRouter } from './punks/punks.router';

dotenv.config();

/**
 * App Variables
 */

// if (!process.env.PORT) {
//   process.exit(1);
// }

const PORT: string | number = process.env.PORT || 1337;

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
pp.use(
  cors({ origin: 'https://cryptopunks.herokuapp.com', credentials: true })
);
app.use(express.json());
app.use('*', punksRouter);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
