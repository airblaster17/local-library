// This function finds the account object in the accounts array with the given id.
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

//  sorts the accounts array by the last name of each account's name object.
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last;
    const lastNameB = accountB.name.last;
    return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
  });
}

// returns the total number of times an account has borrowed a book.
function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let total = 0;

  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((element) => {
      if (element.id === id) {
        total++;
      }
    });
  }

  return total;
}

//  returns an array of books that are currently checked out by the given account.
// each book object includes the author object for that book.
function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;

  let result = [];

  // Filter the books array to only include books that have not been returned and were borrowed by the given account.
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });

  // Map over the filtered books array to add the author object to each book object.
  result = result.map((book) => {
    const author = getAuthorById(authors, book.authorId);
    const newBook = {
      ...book,
      author,
    };

    return newBook;
  });

  return result;
}

//  find the author object in the authors array with the given id.
function getAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
