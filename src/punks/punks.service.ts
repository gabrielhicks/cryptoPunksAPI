/**
 * Data Model Interfaces
 */

import { BasePunk, Punk } from './punk.interface';
import { Punks } from './punks.interface';

/**
 * In-Memory Store
 */
const punks = require('../../cryptoPunkData.json');

/**
 * Service Methods
 */

export const findAll = async (): Promise<Punk[]> => Object.values(punks);

export const find = async (id: string): Promise<Punk> => punks[id];
