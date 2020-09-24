import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import router from './routes';
import genericErrorHandler from './middlewares/genericErrorHandler';
import logger from './utils/logger';

const PORT = process.env.PORT || 4056;

const app = express();

function loggingMiddleware(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(loggingMiddleware);
app.use(morgan('tiny'));
app.use(router);
app.use(genericErrorHandler);

app.listen(PORT, function () {
  console.log(`Listining on port ${PORT}`);
});
