
// variables pour les scores
let current_score1 = 0;
let current_score2 = 0;
let global_score1 = 0;
let global_score2 = 0;

// variable pour choisir le joueur actif
let active_player = 1;
// on récupère le bouton new game
let newgame = document.getElementById("icon_addcircle")
 // on récupère le bouton roll dice
const roll_dice = document.getElementById("icon_rolldice")
//  on récupère le bouton hold
const btn_hold = document.getElementById("icon_hold")
// récupérer l'emplacement current player1 et player 2
let roundplayer1 = document.getElementById("round_player1")
let roundplayer2 = document.getElementById("round_player2")
// récupérer emplacement de global player1 et global player 2
let globalplayer1 = document.getElementById("global_player1");
let globalplayer2 = document.getElementById("global_player2");
// récupération des icones player 1 et player 2
const player1 = document.getElementById("icon-player1");
const player2 = document.getElementById("icon-player2");

// création d'un nombre aléatoire entre 1 et 6
const random_number = () => {
   return Math.floor(Math.random()*6 +1);
}

// fonction pour lancer une nouvelle partie
const new_game = () => {
// variables reviennent à zéro
   active_player = 1;
   player1.style.visibility="visible";
   player2.style.visibility= "hidden";
   roundplayer1.textContent = 0;
   roundplayer2.textContent  = 0;
   globalplayer1.textContent  = 0;
   globalplayer2.textContent = 0;
   current_score1 = 0;
   current_score2 = 0;
   global_score1 = 0;
   global_score2 = 0;
}

// fonction pour changer de joueur
const change_player = () => {
   if (active_player === 1) {
      active_player = 2;
      player1.style.visibility="hidden";
      player2.style.visibility= "visible";
      current_score1 = 0;
   }  else {
      active_player = 1;
      player1.style.visibility="visible";
      player2.style.visibility= "hidden";
      current_score2 = 0;
   }
}

// fonction pour lancer et afficher un dé
 const lancer_dé = () => {
   let roll = random_number();
   let nomfichier = "de" + roll + ".png";
   // récupère l'emplacement du dé
   const lancer_dé = document.querySelector("#lancer_dé");
   lancer_dé.setAttribute("src", nomfichier);

   //  si lancer dé = 1 code
   if (roll === 1){
      change_player();

   } else {
      // si lancer dé différent de 1   
      // dépend du joueur
      if (active_player === 1) {
         current_score1 = roll + current_score1;
         roundplayer1.textContent = current_score1;
      } else {
         current_score2 = roll + current_score2;
         roundplayer2.textContent = current_score2;
      }
   }
}
//fonction pour vérifier les scores globaux
const verif_score = () => {
   if( global_score1 >= 100 || global_score2 >=100 ) {
      window.alert(`le joueur ${active_player} a gagné`)
   } 
}

// fonction hold
 const fonction_hold = () => {  
   if (active_player === 1) {
      global_score1 = global_score1 + current_score1;
      // console.log(global_score1)
      globalplayer1.textContent = global_score1;
      roundplayer1.textContent = 0
   }   else {
      global_score2 = global_score2 + current_score2;
      globalplayer2.textContent = global_score2;
      roundplayer2.textContent = 0;
      
   }
   verif_score();
   change_player();
   }

// exécute la fonction en cliquant sur icone roll dice
roll_dice.addEventListener("click", lancer_dé);

// on exécute fonction mettre dans global quand on appuie sur icone hold
btn_hold.addEventListener("click", fonction_hold);

// quand on appuie sur new game on lance une nouvelle partie
newgame.addEventListener("click", new_game);


