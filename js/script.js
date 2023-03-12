//------------- handle search button-----------
const error = document.getElementById('error');

const searchResult = document.getElementById("search-result");

const totalBooks = document.getElementById('total');

document.getElementById('search').addEventListener('click',function(){

  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  if(searchText.length == 0){
    error.innerText = "search field can not be empty"
    alert('Hello,are you mad!! enter something')
    searchResult.innerHTML = '';
    totalBooks.innerText = '' ;
  }
  else{
    error.innerText = '' ;
    searchField.value = '' ;
    searchBook(searchText);
  }
})

const searchBook = (searchText) => {
  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displaySearchResult(data)
    });
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  searchResult.innerText = "";
  totalBooks.innerHTML = `<h3 class="text-center text-secondary">Total books found ${myBooks.docs.length}</h3>`;
  myBooks.docs.slice(0,15).forEach((book) =>{
  let code = book.cover_i;
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
      <div class="card">
      <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="no image">
        <div class="card-body text-center">
            <h5 class="card-title"> Name: ${book.title?book.title : 'Unknown'}</h5>
            <h6> Author: ${book.author_name?book.author_name : 'Unknown'}</h6>
            <p>Publisher: <small> ${book.publisher?book.publisher[0]:'Unknown'} </small></p>
            <small> First Published Year: ${book.first_publish_year?book.first_publish_year: 'Unknown'}</small>
          </div>
      </div>
      `;
  searchResult.appendChild(div);
  
  });
};