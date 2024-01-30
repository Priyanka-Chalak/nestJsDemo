//Custome Pipes

/*
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { StudentDto } from '../dto/student.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class StudentPipe implements PipeTransform {
  async transform(value: any): Promise<any> {
    //if we want to perform class validation with the help of class-validator we need class we can not work with object
    //so with the help of class-transformer we convert object to class
    const studentClass = plainToInstance(StudentDto, value);

    //class validation
    //method which provided by class-validator are bydefault asynchroous so we use here await
    const errors = await validate(studentClass);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation failed ' + JSON.stringify(errors),
      );
    } else {
      console.log(value, typeof value);
      return value;
    }
  }
}
*/
