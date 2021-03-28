/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as PunkService from './punks.service';
import { BasePunk, Punk } from './punk.interface';

/**
 * Router Definition
 */

export const punksRouter = express.Router();

/**
 * Controller Definitions
 */

// GET punks

punksRouter.get('/', async (req: Request, res: Response) => {
  try {
    const punks: Punk[] = await PunkService.findAll();

    res.status(200).send(punks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET punks/:id

punksRouter.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const punk: Punk = await PunkService.find(id);

    if (punk) {
      return res.status(200).send(punk);
    }

    res.status(404).send('punk not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});
