function findAuthorById(authors, id) {
  return authors.find(authors => authors.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}


function partitionBooksByBorrowedStatus(books) {
  //  a function that returns an array of non-returned books
  function getNonReturnedBooks(books) {
    return books.filter((book) => !book.borrows[0].returned);
  }
  
  // a function that returns an array of returned books
  function getReturnedBooks(books) {
    return books.filter((book) => book.borrows[0].returned);
  }
  
  // create an array of non-returned books
  const nonReturnedBooks = getNonReturnedBooks(books);
  
  // create an array of returned books 
  const returnedBooks = getReturnedBooks(books);
  
  // create an array with two elements: non-returned books and returned books
  const result = [nonReturnedBooks, returnedBooks];
  
  // return the result
  return result;
}

function getBorrowersForBook(book, accounts) {
  // create array of transactions from given book
  const transactions = book.borrows;
  // use map to add the transaction id's acct info to the transaction
  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
      
    };
    return newTransaction;
  });
  // limit amount of tranasctions to 10
  result.splice(10);
  // return the updated transaction array
  return result;
}

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
