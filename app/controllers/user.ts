import { Request, Response } from 'express';

import * as userService from '../clients/mongodb';

export const createUser = async (req: Request, res: Response) => {
  try {
    const response = await userService.createUser(req.body);
    const data = response.toJSON();

    res.status(201);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.json({ error: (error as Error).message });
  }
};