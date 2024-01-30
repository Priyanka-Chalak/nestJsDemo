import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
// import { StudentPipe } from './pipes/student.pipe';

@Controller('student')
export class StudentController {
  @Get('/:id')
  findStudentById(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return 'Student by Id';
  }

  //This is custom pipe call
  /*  @Post('/add')
  addStudent(@Body(new StudentPipe()) student: StudentDto): string {
    return 'student added successfully !!!';
  } */

  //using nest built-in pipe as ValidationPipe
  @Post('/add')
  addStudent(@Body(new ValidationPipe()) student: StudentDto): string {
    return 'student added successfully !!!';
  }
}
