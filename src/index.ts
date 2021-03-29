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

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET',
  origin: '*',
  preflightContinue: false,
};

// if (!process.env.PORT) {
//   process.exit(1);
// }

const PORT: string | number = process.env.PORT || 1337;

const app = express();

/**
 *  App Configuration
 */

// app.use(helmet());
app.use(cors(options));
app.use(express.json());
app.use('*', punksRouter);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
