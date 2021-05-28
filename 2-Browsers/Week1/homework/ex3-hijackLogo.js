'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const googleLogo = document.querySelector('img[alt="Google"]');

  googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';

  googleLogo.srcset =
    'https://www.hackyourfuture.dk/static/logo-dark.svg 1x, https://www.hackyourfuture.dk/static/logo-dark.svg 2x ';
}

hijackGoogleLogo();
