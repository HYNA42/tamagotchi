/* 
États de notre Tamastudi possibles :
- 🥚 : partie non lancée
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5 pendant plus d'une minute 
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes après avoir mangé
*/

/* 
PHASE 1 : la naissance de mon tama 
1) demander le nom de mon personnage
2) fait éclore mon oeuf pour passer au poussin
3) affiche mes vitals
4) affiche le nom de mon tama dans les vitals
5) mettre les scores des vitals à 5
*/

// demander le prénom
// const tamaName = prompt("Quel nom a votre tamastudi ?");
// // 2) fait éclore mon oeuf pour passer au poussin
// const character = document.querySelector(".js-character");
// character.textContent = "🐣";
// // 3) affiche mes vitals
// const vitals = document.querySelector(".js-vitals");
// vitals.classList.remove("hidden");

/**PHASE 1 : naissance de mon tama */
/**1) demander le prénom de mon personnage
 * 2) fait éclore mon oeuf pour passer au poussin
 * 3) afficher mes vitals
 * 4) afficher le nom de mon tama dans les vitals
 * 5) mettre les scores des vitals à 5
 */

const birthTama = () => {
  /**1) demander le nom du personnage */
  const tamaName = prompt("Quel nom a votre tamastudi");
  // console.log(tamaName);

  /**2) fait éclore mon oeuf */
  const character = document.querySelector(".js-character");
  character.textContent = "🐣";
  // console.log(character)

  /**3) afficher mes vitals */
  const vitals = document.querySelector(".js-vitals");
  // console.log(vitals);
  vitals.classList.remove("hidden");
  /**4) afficher le nom de mon tama dans les vitals */
  const nameDisplay = document.querySelector(".js-tamaName");
  nameDisplay.textContent = tamaName;
  // console.log(nameDisplay);

  /**5) mettre les scores des vitals à 5 */
  const scoreDisplay = document.querySelectorAll(".js-score");
  console.log(scoreDisplay);
  scoreDisplay.forEach((score) => {
    score.textContent = 5;
  });

  /**6) afficher les actions */
  const actions = document.querySelector(".js-actions");
  actions.classList.remove("hidden");
};

/**PHASE 0 : activer le tamastudi
 * 1) cliquer sur le bouton du milieu
 * 2) quand on arrive à 5 clic alors fait afficher notre tama
 * 3) Ajouter un compteur qui attend d'avoir une valeur max de 5 pour faire na$itre le tama
 */
const start = () => {
  const buttonCenter = document.querySelector(
    '.js-button[data-direction="center"]'
  );
  let count = 0;
  buttonCenter.addEventListener("click", (e) => {
    count++;
    console.log(count);
    if (count === 5) {
      // console.log('OK 5')
      birthTama();
    }
  });
};

/**PHASE 2 : l'évolution de mon tama
 * 1) attendre que notre tamaStudi ait une "première envie"
 * 2) il devient grand
 * 
 */
setTimeout(() => {
    console.log('1 seconde est passé')
},1000)
//lancer la fonction de "début de mon Tama"
start();
