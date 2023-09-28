//Déclaration d'un tableau d'ojets pour stocker des information
var eleves = [
  {
    nom: "Kenfack",
    prenom: "Jean",
    age: 15
  },
  {
    nom: "Ndongo",
    prenom: "Marie",
    age: 16
  },
  {
    nom: "Kamga",
    prenom: "Pierre",
    age: 17
  }
];

// Affichage de la variable "eleves" dans la console
console.log(eleves);

// Fonction pour incrémenter l'âge de chaque élève
function incrementerAgeDesEleves(eleves, annees) {
  for (var i = 0; i < eleves.length; i++) {
    eleves[i].age += annees;
  }
}

// Appel de la fonction pour incrémenter l'âge des élèves de 1 an
incrementerAgeDesEleves(eleves, 1);

// Affichage des élèves mis à jour dans un template string
eleves.forEach(function(eleve) {
  console.log(`Nom: ${eleve.nom}, Prénom: ${eleve.prenom}, Age: ${eleve.age}`);
});


// Créez un tableau de démonstration
let tableau = [1, 2, 3, 4, 5];

// Index au milieu du tableau
let indexAuMilieu = Math.floor(tableau.length / 2);

// Valeur à insérer
let valeurAInserer = 10;

// Utilisez la méthode splice() pour insérer la valeur au milieu
tableau.splice(indexAuMilieu, 0, valeurAInserer);

// Le tableau est maintenant modifié avec la nouvelle valeur
console.log(tableau); // Affiche : [1, 2, 10, 3, 4, 5]
