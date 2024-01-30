import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';
import { StudentModule } from './pipesDemo/student.module';

@Module({
  imports: [BookModule, UsersModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
