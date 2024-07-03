import { Request, Response } from 'express';
import * as selfieClient from '../clients/mongodb';
import { getIOManager } from '../..';

export const uploadSelfie = async (req: Request, res: Response) => {
  try {
    const sm = getIOManager();
    const { id } = req.body;

    const response = await selfieClient.updateUser(id, req.body);

    if (!response) {
      res.status(404);
      res.json({ error: 'User not found' });
      return;
    }

    const data = response.toJSON();

    sm.io.emit('saved-selfie', data);
    res.status(201);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.json({ error: (error as Error).message });
  }
};