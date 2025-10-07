class Book {
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this._year = year;
  }
  get name() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Name not a string");
    }
    this._name = value;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Name not a string");
    }
    this._author = value;
  }
  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      console.log("Name not a number");
    }
    this._year = value;
  }
  printInfo() {
    console.log(
      `Name: ${this._name}, author: ${this._author}, year: ${this._year}`
    );
  }
  static findOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}

const book1 = new Book("Karlson", "Astrid", 1970);
const book2 = new Book("Maugli", "Kipling", 1980);
book1.printInfo();
book2.printInfo();
