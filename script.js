//variables
let currentScore1 = 0;
let currentScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;
// variable for active player
let activePlayer = 1;
// new game button
let newgame = document.getElementById('icon_addcircle')
 // roll dice button
const rollDice = document.getElementById('icon_rolldice')
//  hold button
const btnHold = document.getElementById('icon_hold')
// location current player1 et player 2
let roundPlayer1 = document.getElementById('round_player1')
let roundPlayer2 = document.getElementById('round_player2')
// location global player1 et global player 2
let globalPlayer1 = document.getElementById('global_player1');
let globalPlayer2 = document.getElementById('global_player2');
// icons player 1 et player 2
const player1 = document.getElementById('icon_player1');
const player2 = document.getElementById('icon_player2');

// function for random number between 1 and 6
const randomNumber = () => {
   return Math.floor(Math.random()*6 +1);
}

// function for start a new game
const new_game = () => {
// initialization of variables
   activePlayer = 1;
   player1.style.visibility='visible';
   player2.style.visibility= 'hidden';
   roundPlayer1.textContent = 0;
   roundPlayer2.textContent  = 0;
   globalPlayer1.textContent  = 0;
   globalPlayer2.textContent = 0;
   currentScore1 = 0;
   currentScore2 = 0;
   globalScore1 = 0;
   globalScore2 = 0;
}

// function for change player
const changePlayer = () => {
   if (activePlayer === 1) {
      activePlayer = 2;
      player1.style.visibility='hidden';
      player2.style.visibility= 'visible';
      currentScore1 = 0;
   }  else {
      activePlayer = 1;
      player1.style.visibility='visible';
      player2.style.visibility= 'hidden';
      currentScore2 = 0;
   }
}

// function pour launch dice
 const launchDice = () => {
   let roll = randomNumber();
   let nomfichier = 'de' + roll + '.png';
   // location of dice
   const lancerDe = document.querySelector('#launch_dice');
   lancerDe.setAttribute('src', nomfichier);

   //if dice = 1 
   if (roll === 1){
      changePlayer();

   } else {  
      if (activePlayer === 1) {
         currentScore1 = roll + currentScore1;
         roundPlayer1.textContent = currentScore1;
      } else {
         currentScore2 = roll + currentScore2;
         roundPlayer2.textContent = currentScore2;
      }
   }
}
//function for check scores
const verifScore = () => {
   if( globalScore1 >= 100 || globalScore2 >=100 ) {
      window.alert(`le joueur ${activePlayer} a gagné`)
   } 
}

// function hold
 const holdFunction = () => {  
   if (activePlayer === 1) {
      globalScore1 = globalScore1 + currentScore1;
      globalPlayer1.textContent = globalScore1;
      roundPlayer1.textContent = 0
   }   else {
      globalScore2 = globalScore2 + currentScore2;
      globalPlayer2.textContent = globalScore2;
      roundPlayer2.textContent = 0;
      
   }
   verifScore();
   changePlayer();
   }

// execute functions
rollDice.addEventListener('click', launchDice);

// hold button
btnHold.addEventListener('click', holdFunction);

// new game button
newgame.addEventListener('click', new_game);


