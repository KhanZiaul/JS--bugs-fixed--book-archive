//------------- handle search button-----------
document.getElementById('search').addEventListener('click',function(){

  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  searchBook(searchText);
})

const searchBook = (searchText) => {
  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data));
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  // const searchResult = document.getElementById("search-result");
  // searchResult.innerText = "";
    myBooks.docs.forEach((book) => {
    console.log(book);

  });
};

// searchBook();