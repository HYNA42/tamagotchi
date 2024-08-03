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

const myTama = {
  name: "",
  alive: false,
  fed: 0,
  cleaned: 0,
  playfull: 0,
  lifeDuration: 0,
};
console.log(myTama);

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
    // console.log(count);
    if (count === 5) {
      // console.log('OK 5')
      birthTama();
    }
  });
};

/**PHASE 1 : naissance de mon tama */
/**1) demander le prénom de mon personnage
 * 2) fait éclore mon oeuf pour passer au poussin
 * 3) afficher mes vitals
 * 4) afficher le nom de mon tama dans les vitals
 * 5) mettre les scores des vitals à 5
 */

const birthTama = () => {
  /**1) demander le nom du personnage */
  myTama.name = prompt("Quel nom a votre tamastudi");
  // console.log(myTama);

  /**2) fait éclore mon oeuf */
  // const character = document.querySelector(".js-character");

  showInScreen("🐣");
  // console.log(character)

  /**3) afficher mes vitals */
  const vitals = document.querySelector(".js-vitals");
  // console.log(vitals);
  vitals.classList.remove("hidden");
  /**4) afficher le nom de mon tama dans les vitals */
  const nameDisplay = document.querySelector(".js-tamaName");
  nameDisplay.textContent = myTama.name;
  // console.log(nameDisplay);

  /**5) mettre les scores des vitals à 5 */
  const defaultScore = 5;
  const scoreDisplay = document.querySelectorAll(".js-score");
  // console.log(scoreDisplay);
  scoreDisplay.forEach((score) => {
    score.textContent = defaultScore;
  });
  myTama.fed = defaultScore;
  myTama.playfull = defaultScore;
  myTama.cleaned = defaultScore;
  /**6) afficher les actions */
  const actions = document.querySelector(".js-actions");
  actions.classList.remove("hidden");

  /**7) appel de la fontion pour le faire grandir */
  evolve();

  // 9) calcul de la durée de vie
  lifeDuration();
};

/**PHASE 2 : l'évolution de mon tama
 * 1) attendre que notre tamaStudi ait une "première envie"
 * 2) il devient grand
 *
 */
const evolve = () => {
  // 1) attendre que notre tamaStudi ait une première envie
  const functionToExecute = () => {
    // showInScreen("🥰");
    /**8) calcul de son humeur */
    mood();
  };

  wantsTo(functionToExecute);
};

/**LES ENVIES :
 * Fontions pour gérer 
 * - 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes après avoir mangé

1) créer une fonctiona qu'on va pouvoir appeler plus tard dans notre code
2) Stocker les envies de mon tama dans une variable
3) Avec un setTimeout choisir une envie aléatoire
4) La durée du setTimeout est dynamique et compris entre une valeur max et une valeur min
5) Afficher du tama sur notre écran 
6) L'envie de faire caca ne peut se faire que s'il a déjà mangé 
 */

const wantsTo = (callback) => {
  const needs = ["😋", "🥱", "💩"];
  const minDuration = 1000;
  const maxDuration = 3000;

  const duration = getRandomInt({
    min: minDuration,
    max: maxDuration,
  });
  // console.log(duration);
  setTimeout(() => {
    const randomIndexNeeds = getRandomInt({
      min: 0,
      max: needs.length,
    });
    const desire = needs[randomIndexNeeds];
    if (callback) {
      callback();
    } else {
      showInScreen(desire);
    }
  }, duration);
};
/**HUMEUR GENERALE :
 * Une fonction qui calcule la moyenne des 3 indicateurs faim, ennui, propreté de notre tama
 * Elle fait afficher cette moyenne dans les vitals
 */
const mood = () => {
  //Partie 1 : affichage numérique
  const average = (myTama.fed + myTama.playfull + myTama.cleaned) / 3;
  const rounded = Math.round(average);

  const displayMood = document.querySelector(".js-mood");
  displayMood.textContent = rounded;

  //Partie 2 : affichage visuel
  // showInScreen("...");
  //   - 😢 : triste 0/5
  // - 🙁 : pas content 1/5
  // - 🙂 : normal 2/5
  // - 😄 : content 3/5
  // - 🤗 : heureux 4/5
  // - 🥰 : très heureux 5/5
  const listOfEmojis = ["😢", "🙁", "🙂", "😄", "🤗", "🥰"];
  showInScreen(listOfEmojis[rounded]);
};

/**DUREE DE VIE
 * Une fonction qui toutes les minutes me à jour la durée de vie du Tama
 */
const lifeDuration = () => {
  // console.log("1 : lifeDuration");
  const duration = 60000;
  const diplayLifeDration = document.querySelector(".js-life-duration");

  setInterval(() => {
    myTama.lifeDuration++;
    // console.log("2 : setInterval", myTama.lifeDuration);

    // console.log("3 : Display", diplayLifeDration);
    diplayLifeDration.textContent = myTama.lifeDuration;
  }, duration);
};

/**Fonction qui retourne un nombre aléatoire compris entre min et max */
const getRandomInt = (props) => {
  const max = props.max;
  const min = props.min ? props.min : 0;
  // console.log(props);

  return Math.floor(Math.random() * (max - min) + min);
};

/**Fonction qui gère l'affichage des emoticones dans l'écran du tama */
const character = document.querySelector(".js-character");
const showInScreen = (display) => {
  character.textContent = display;
};

//lancer la fonction de "début de mon Tama"
start();
