import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

//Module based Middleware

@Injectable()
export class UserMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('This is class bases middleware for user module')
    const protocol = req.protocol; //http
    const host = req.get('host'); //host
    const url = req.originalUrl; // /users
    const method = req.method; //get, post
    const date = new Date().toDateString();

    console.log(protocol + '://' + host + url + ' ' + method + ' ' + date);
    next();
  }
}

//register class middleware in userModule
