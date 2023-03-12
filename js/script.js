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
    .then((data) => {
      console.log(data);
      displaySearchResult(data)
    });
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerText = "";
  const totalBooks = document.getElementById('total');
  totalBooks.innerHTML = `<h3 class="text-center text-secondary">Total books found ${myBooks.docs.length}</h3>`;
  myBooks.docs.forEach((book) =>{
  let code = book.cover_i;
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
      <div class="card">
      <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body text-center">
            <h5 class="card-title"> Name: ${book.title?book.title : 'No Name Found'}</h5>
            <h6> Author: ${book.author_name}</h6>
            <p>Publisher: <small> ${book.publisher?book.publisher[0]:'No publisher found'} </small></p>
            <small> First Published Year: ${book.first_publish_year?book.first_publish_year: 'No Year Found'}</small>
          </div>
      </div>
      `;
  searchResult.appendChild(div);
  
  });
};



{/* */}
           



searchBook();