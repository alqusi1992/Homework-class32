'use strict';
/*------------------------------------------------------------------------------
1. Run the unmodified exercise and observe that it works as advertised. Observe 
   that the dice must be thrown an indeterminate number of times until we get an 
   ACE or until it rolls off the table.
2. Now, rewrite the body of the `rollDiceUntil()` function using async/await and 
   without using recursion. Hint: a `while` loop may come handy.
3. Refactor the function `main()` to use async/await and try/catch.
------------------------------------------------------------------------------*/
// ! Do not change or remove the next two lines
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollDiceUntil(wantedValue) {
  // TODO: rewrite this function using async/await
  const diceValue = await rollDice();
  if (diceValue !== wantedValue) {
    return rollDiceUntil(wantedValue);
  }
  return diceValue;
}

// TODO refactor this function to use try/catch
async function main() {
  try {
    const results = await rollDiceUntil('ACE');
    console.log('Resolved!', results);
  } catch (err) {
    console.log('Rejected!', err.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollDiceUntil;
