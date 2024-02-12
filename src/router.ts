import { IncomingMessage, ServerResponse } from 'http';
import { getUsers } from './utils/userService';
import { sendResponse } from './utils/sendResponse';

export const router= async(req: IncomingMessage, res: ServerResponse)=> {
    try {
        if (req.url) {
            switch (req.method) {
                case 'GET':
          if (/^\/api\/users\/?$/.test(req.url)) {
            getUsers(req, res);
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