import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import logger from './utils/logger';
import genericErrorHandler from './middlewares/genericErrorHandler';

function loggingMiddleware(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(loggingMiddleware);
app.use(morgan('tiny'));

app.use(routes);

app.use(genericErrorHandler);

app.listen(process.env.PORT, function () {
  logger.info(`Listining on port ${process.env.PORT}`);
});
