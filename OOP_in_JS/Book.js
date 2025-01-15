class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._title = value;
    } else {
      throw new Error("Invalid title");
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._author = value;
    } else {
      throw new Error("Invalid author");
    }
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value === 'number' && value > 0) {
      this._year = value;
    } else {
      throw new Error("Invalid year");
    }
  }


  printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }


  static findOldestBook(books) {
    return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
  }
}

module.exports = Book;
