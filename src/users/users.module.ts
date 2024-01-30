import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserMiddleWare } from './user.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})

//Module level middleware
//if we want to create modulelevel middleware we need to register this by implementing NestModule
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleWare).forRoutes('users');
  }
}
