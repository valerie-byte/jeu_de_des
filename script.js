// // mettre à zéro les valeurs globaux global_player1 et global_player2 =0
// const icon_player2 = document.getElementById("icon_point")

// const global_player1 = document.getElementById("global_player1");
// const global_player2 = document.getElementById("global_player2");



// function resets_globaux() {
//     icon_player2
//     // new_party.style.background = "blue";
// }


// new_party.addEventListener("click", resets_globaux);



// ********************************************

// function disable () { 
//     // permet de bloquer le bouton
//     document.getElementById('icon_rolldice').disabled=true;
// }

 // on récupère le bouton roll dice
 const roll_dice = document.getElementById("icon_rolldice")

// création d'un nombre aléatoire entre 1 et 6
function random_number() {
  return Math.floor(Math.random()*6 +1);
    }

// fonction pour lancer et afficher un dé
function img_de () {
    
    let roll = random_number();
    
    let de = document.createElement("img");
    if (roll ===1 ){
        de.setAttribute("src", "dé1.png");
    }
    else if (roll === 2 ) {
        de.setAttribute("src", "de2.png");
    }
    else if (roll === 3 ) {
        de.setAttribute("src", "de3.png");
    }
    else if (roll === 4 ) {
        de.setAttribute("src", "de4.png");
    }
    else if (roll === 5 ) {
        de.setAttribute("src", "de5.png");
    }
    else if (roll === 6 ) {
        de.setAttribute("src", "de6.png");
    }

    // on met l'élément crée dans l'id lancer_dé
    document.getElementById('lancer_dé').appendChild(de);
  

}

// exécute la fonction en cliquant sur icone roll dice
roll_dice.addEventListener("click", img_de, false)

// // fonction pour effacer le dé affiché
// function erase_de () {
//     let affich = document.getElementById("de");
//     affich.setAttribute("src", "defeaut.png");
    
// }

