
// function disable () { 
//     // permet de bloquer le bouton
//     document.getElementById('icon_rolldice').disabled=true;
// }

let current_score1 = 0;
 // on récupère le bouton roll dice
const roll_dice = document.getElementById("icon_rolldice")
//  on récupère le bouton hold
const btn_hold = document.getElementById("icon_hold")
// récupérer l'emplacement player1
let roundplayer1 = document.getElementById("round_player1")

// création d'un nombre aléatoire entre 1 et 6
function random_number() {
  return Math.floor(Math.random()*6 +1);
}

// // fonction pour afficher dans le player1
//  affich_player1 = (roll) => {
//     //l'afficher dans l'emplacement
//     roundplayer1.textContent = roll;
//  }

// fonction pour lancer et afficher un dé
 const lancer_dé = () => {
    let roll = random_number();
    
    let nomfichier = "de" + roll +".png";
    // récupère l'emplacement du dé
    const lancer_dé = document.querySelector("#lancer_dé");
    lancer_dé.setAttribute("src", nomfichier);
    // console.log(nomfichier);
    current_score1 = roll + current_score1;
    // console.log(current_score1);
    roundplayer1.textContent = current_score1;
 }

 const fonction_hold = () => {    
    // récupérer emplacement de global player1
    let globalplayer1 = document.getElementById("global_player1");
    // mettre valeur current player1 dans globalplayer1;
    globalplayer1.textContent = roundplayer1.textContent;
 }


// exécute la fonction en cliquant sur icone roll dice
roll_dice.addEventListener("click", lancer_dé);

// on exécute fonction mettre dans global quand on appuie sur icone hold
btn_hold.addEventListener("click", fonction_hold);


