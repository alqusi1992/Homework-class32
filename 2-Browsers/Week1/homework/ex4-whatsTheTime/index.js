'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const getCurrentTime = new Date();
  const changeTheCurrentTime = getCurrentTime.toLocaleTimeString();
  document.querySelector('#currentTime').textContent = changeTheCurrentTime;
  window.addEventListener('load', () => {
    console.log('page is fully loaded');
  });
}

setInterval(addCurrentTime, 50);
