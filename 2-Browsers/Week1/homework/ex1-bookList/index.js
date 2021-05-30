//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  const list = document.createElement('ul');
  list.style.display = 'flex';

  books.forEach((data, index) => {
    const li = document.createElement('li');
    const p = document.createElement('p');

    p.textContent = `${data.title} - ${data.author}`;
    let style = `list-style-type:none;margin:50px;padding:15px`;
    li.style = style;
    li.appendChild(p);

    /** Here if condition to change the color depends on wether read it or not */
    if (!data.alreadyRead) {
      li.style.backgroundColor = 'red';
    } else {
      li.style.backgroundColor = 'green';
    }
    /** I used the second parameter of forEach Index to put each IMAGE in separate object  */
    let arrayOfImages = [
      'https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg',
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_pragmatic_programmer.jpg/220px-The_pragmatic_programmer.jpg',
    ];

    const image = document.createElement('img');
    image.alt = 'image';
    image.src = arrayOfImages[index];
    image.width = '200';
    li.appendChild(image);

    list.appendChild(li);
  });

  return list;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
