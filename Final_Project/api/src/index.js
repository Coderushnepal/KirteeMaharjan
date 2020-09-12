import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import logger from './utils/logger';
import router from './routes';

const app = express();

function loggingMiddleware(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

dotenv.config();

app.use(bodyParser.json());
app.use(loggingMiddleware);
app.use(morgan('tiny'));
app.use(router);

app.listen(process.env.PORT, function () {
  console.log(`Listining on port ${process.env.PORT}`);
});
