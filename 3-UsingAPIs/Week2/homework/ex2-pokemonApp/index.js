'use strict';

/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  return fetch(url);
}

async function fetchAndPopulatePokemons(data) {
  const dataOutput = await data.json();

  const createBtn = document.createElement('button');
  createBtn.id = 'btn';
  createBtn.textContent = 'Get Pokemon!';
  document.body.appendChild(createBtn);

  const selectItem = document.createElement('select');
  selectItem.id = 'select';
  selectItem.style.display = 'block';
  selectItem.style.marginTop = '10px';
  document.body.appendChild(selectItem);

  const createImg = document.createElement('img');
  createImg.id = 'image';
  createImg.style.marginTop = '10px';
  createImg.src = dataOutput;
  document.body.appendChild(createImg);

  createBtn.addEventListener('click', () => {
    Object.entries(dataOutput.results).map((result) => {
      const displayOption = document.createElement('option');
      displayOption.textContent = JSON.stringify(result[1].name);
      selectItem.appendChild(displayOption);
    });
  });

  selectItem.addEventListener('change', (e) => {
    fetchImage(e.target.value, createImg);
  });
}

async function fetchImage(dataOutput, createImg) {
  try {
    createImg.src = dataOutput;
    createImg.alt = 'img';
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  try {
    const insertData = await fetchData('https://pokeapi.co/api/v2/pokemon');
    return fetchAndPopulatePokemons(insertData);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener('load', main);
