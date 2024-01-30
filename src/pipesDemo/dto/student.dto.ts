//class-Validator is always works on class it can not work with interface

import { IsInt, IsString } from 'class-validator';

export class StudentDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
