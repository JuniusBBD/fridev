import express, { type Express } from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import SwaggerParser from '@apidevtools/swagger-parser';
import { connector } from 'swagger-routes-express';
import swaggerUI from 'swagger-ui-express';
import cors from  'cors';
import { routes } from './routes';

const app = express();

app.use(express.json());

export const api = async (): Promise<Express> => {

  const parser = new SwaggerParser();
  const apiDescription = await parser.validate('app/swagger/swagger.yml');
  const connect = connector(routes, apiDescription);

app.use(cors());
  app.use(
    OpenApiValidator.middleware({
      apiSpec: 'app/swagger/swagger.yml',
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    }),
  );


  app.get('/', (req, res) => {
    res.send('Fridev session');
  });

   // swagger ui
   app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDescription));
  connect(app);

  return app;
};
