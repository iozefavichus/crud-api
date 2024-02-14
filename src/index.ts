import http from 'http';
import { config } from 'dotenv';

import Database from './database';
import { router } from './router';

config();

export const users = new Database();

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
  router(req, res);

});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});