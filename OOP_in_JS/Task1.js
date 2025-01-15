const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

const ebook1 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

ebook1.fileFormat = 'EPUB';
console.log(`New_File_Format: ${ebook1.fileFormat}`);

const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log('Oldest_Book:');
oldestBook.printInfo();

const ebook2 = EBook.createFromBook(book1, 'MOBI');
ebook2.printInfo();
