import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBook(book: Book): string {
    //auto generate id
    book.bookId = uuidv4();
    this.books.push(book);
    return 'Book added successfully';
  }

  updateBook(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.bookId == book.bookId;
    });
    this.books[index] = book;
    return 'Book updated successfully';
  }

  deleteBook(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.bookId != bookId;
    });
    return 'Book deleted successfully';
  }

  findBookById(bookId: string): Book {
    const foundBook = this.books.find((book) => book.bookId === bookId);

    if (foundBook) {
      return foundBook;
    } else {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }
  }

  findAll(): Book[] {
    return this.books;
  }
}
