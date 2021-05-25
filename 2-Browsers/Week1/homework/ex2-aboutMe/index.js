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
const firstSpan = document.querySelector('#nickname');
const secondSpan = document.querySelector('#fav-food');
const thirdSpan = document.querySelector('#hometown');
const liAddClass = document.querySelectorAll('li');

// Make changing of the elements
body.style.fontFamily = 'Arial, sans-serif';
firstSpan.textContent = 'Mohammad al qusi';
secondSpan.textContent = 'Burger';
thirdSpan.textContent = 'The hague';

// loop through of each element
liAddClass.forEach((items) => {
  items.className = 'list-item';
});
