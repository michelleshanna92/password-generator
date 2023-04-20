var passwordEl = document.getElementById("password");
var generateEl = document.getElementById('generate');
var copyEl = document.getElementById('copy');

          
/* Function to generate combination of password */

function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
    for (let i = 0; i <= 8; i++) {
    var char = Math.floor(Math.random()
                 * str.length + 1);
                  
                pass += str.charAt(char)
            }
            return pass;
        }
          
        function gfg_Run() {
            passwordEl.innerHTML = generateP();
        }