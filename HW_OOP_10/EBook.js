import { Book, book1, book2 } from "./Book.js";

export class EBook extends Book {
  constructor(name, author, year, formatFile) {
    super(name, author, year);
    this._formatFile = formatFile;
  }
  get formatFile() {
    return this._formatFile;
  }
  set formatFile(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("fromat file not a string");
    }
    this._formatFile = value;
  }
  printInfo() {
    console.log(
      `Name: ${this.name}, author: ${this.author}, year: ${this.year}, format file: ${this.formatFile}`
    );
  }
  static fromBook(book, format) {
    return new EBook(book.name, book.author, book.year, format);
  }
}

const eBook1 = new EBook("Gaidamaku", "Schevchenko", 1900, "txt");
const eBook2 = new EBook("Smth", "Mrs", 1920, "txt");

eBook1.printInfo();
eBook2.printInfo();
const allBooks = [book1, book2, eBook1, eBook2];
const oldest = Book.findOldestBook(allBooks);
console.log("The oldest book");
oldest.printInfo();
