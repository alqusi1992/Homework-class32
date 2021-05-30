'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
// Select the Elements
const body = document.querySelector('body');
const nicknameSpan = document.querySelector('#nickname');
const favFoodSpan = document.querySelector('#fav-food');
const hometownSpan = document.querySelector('#hometown');
const liAddClass = document.querySelectorAll('li');

// Make changing of the elements
body.style.fontFamily = 'Arial, sans-serif';
nicknameSpan.textContent = 'Mohammad al qusi';
favFoodSpan.textContent = 'Burger';
hometownSpan.textContent = 'The hague';

// loop through of each element
liAddClass.forEach((items) => {
  items.className = 'list-item';
});
