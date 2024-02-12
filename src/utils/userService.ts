import { IncomingMessage, ServerResponse } from 'http';
import { users } from '../index';

export const getUsers = (req: IncomingMessage, res: ServerResponse): void => {
    const usersData = users.getAllUsers();
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(usersData));
  };