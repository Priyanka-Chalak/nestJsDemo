import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';

//global middleware using function
//global middleware works throughout the application means for each module it will work
function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('This is the global middleware one');
  next();
}

//Multiple middleware also works
/*function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('This is global middleware two');
  next();
}*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  // app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
