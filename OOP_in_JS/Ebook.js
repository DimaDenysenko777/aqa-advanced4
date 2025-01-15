const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._fileFormat = value;
    } else {
      throw new Error("Invalid file format");
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`File_Format: ${this.fileFormat}`);
  }

  static createFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;
