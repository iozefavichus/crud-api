import { IncomingMessage, ServerResponse } from 'http';
import { users } from '../index';
import { sendResponse } from './sendResponse';
import { validate } from 'uuid';

export const getUsers = (req: IncomingMessage, res: ServerResponse): void => {
    const usersData = users.getAllUsers();
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(usersData));
  };

export const getUserById = (req: IncomingMessage, res: ServerResponse, id: string): void => {
    if (!validate(id)) {
      sendResponse(res, 400, 'Invalid userId');
    } else {
      const user = users.getUserById(id);
      if (!user) {
        sendResponse(res, 404, 'User not found');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(user));
      }
    }
  };