let library = []; // Array to store book objects

// create constructer of book

function book(name, author, pages, read) {
  (this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

// Add Book to Array Usin constructer

function addBook(name, author, pages, read) {
  let book1 = new book(name, author, pages, read);
  library.push(book1);
  const add = document.querySelector("#add-book-form");
  add.style.opacity = "0";
  setTimeout(() => {
    add.style.display = "none";
  }, 500);
}

// Get Date From Form HTML

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const check = form.check;
  addBook(name, author, pages, check.checked);
  form.reset();
  displayBooks();
});

const bookList = document.querySelector("#book-list");

// Update Ui books

function displayBooks() {
  bookList.innerText = "";
  library.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("card");
    li.innerHTML += `
        <h1>Name :${item.name}</h1>
        <h2>Author :${item.author}</h2>
        <h2>Number Pages :${item.pages}p</h2>
        ${
          item.read
            ? '<div id="checkif" class="check read">Read</div>'
            : '<div id="checkif" class="check notReading">Not Reading</div>'
        }
        <div class="removeelem" id="removeElemnet">Remove!</div>
    `;
    bookList.appendChild(li);
  });
  toggleReadOrNot();
  removeElem();
}

// Show Up Form

const showPopUpForm = () => {
  const add = document.querySelector("#add-book-form");
  add.style.display = "block";
  add.style.opacity = "1";
};

// Toggle Read button

const toggleReadOrNot = () => {
  const checkif = document.querySelectorAll(".check");
  checkif.forEach(item => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("read")) {
        e.target.classList.add("notReading");
        e.target.classList.remove("read");
        e.target.innerText = "Not Read";
      } else {
        e.target.classList.add("read");
        e.target.classList.remove("notReading");
        e.target.innerText = "Read";
      }
    });
  });
};

// remove book
const removeElem = () => {
  let removeelem = [...document.querySelectorAll(".removeelem")];

  removeelem.forEach((item, index) => {
    item.addEventListener("click", () => {
      library.splice(index, 1);
      displayBooks();
    });
  });
};
