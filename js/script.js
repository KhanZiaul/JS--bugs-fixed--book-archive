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
  const searchResult = document.getElementById("search-result");
  searchResult.innerText = "";
  myBooks.docs.forEach((book) => {
  console.log(book);
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
      <div class="card">
         
            <h5 class="card-title"> Name: ${book.title?book.title : 'No Name Found'}</h5>
            <h6> Author: ${book.author_name}</h6>
            <p>Publisher: <small> ${book.publisher} </small></p>
            <small> First Published Year: ${book.first_publish_year}</small>
          </div>
      </div>
      `;
  searchResult.appendChild(div);
  
  });
};



// <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
//             <div class="card-body text-center"></div>



// searchBook();