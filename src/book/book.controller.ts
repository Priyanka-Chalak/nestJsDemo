import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  //nestjs provides object
  constructor(private bookService: BookService) {}

  getHello(): any {
    throw new Error('Method not implemented.');
  }
  //add Book
  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBook(book);
  }

  //update Book
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBook(book);
  }

  //Delete Book
  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBook(bookId);
  }

  //find AllBook
  @Get('/findAll')
  findAllBooks(): Book[] {
    return this.bookService.findAll();
  }

  //find By Id
  @Get('/find/:bookId')
  findBookById(@Param('bookId') bookId: string): Book {
    return this.bookService.findBookById(bookId);
  }
}
