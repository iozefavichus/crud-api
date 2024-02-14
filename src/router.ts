import { IncomingMessage, ServerResponse } from 'http';
import { getUsers, getUserById } from './utils/userService';
import { sendResponse } from './utils/sendResponse';

export const router= async(req: IncomingMessage, res: ServerResponse)=> {
    try {
        if (req.url) {
            switch (req.method) {
                case 'GET':
          if (/^\/api\/users\/?$/.test(req.url)) {
            getUsers(req, res);
          } else if (/^\/api\/users\/[\w-]+$/.test(req.url)) {
            const userId = req.url.split('/').pop();
            userId && getUserById(req, res, userId);
          } else {
            sendResponse(res, 404, 'Invalid endpoint');
          }
          break;
            }
        } else {
            sendResponse(res, 404, 'Invalid endpoint');
        }
    } catch {
        sendResponse(res, 500, 'Internal Server Error');
      }
}