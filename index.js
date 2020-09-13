// random value generated 
var y = Math.floor(Math.random() * 10 + 1); 
      
// counting the number of guesses 
// made for correct Guess 
var guess = 1; 
  
document.getElementById("submitguess").onclick = function(){ 
  
// number guessed by user      
var x = document.getElementById("guessField").value; 

if(x == y) 
{     
  message.textContent = 'Congratulations! You got it right!';
  message.style.backgroundColor = 'green';
} 
else if(x > y) /* if guessed number is greater 
               than actual number*/ 
{     
   guess++; 
   message.textContent = 'OOPS SORRY!! TRY A SMALLER NUMBER';
   message.style.backgroundColor = 'red';
} 
else
{ 
   guess++; 
   message.textContent = 'OOPS SORRY!! TRY A GREATER NUMBER';
   message.style.backgroundColor = 'red';
} 
} 