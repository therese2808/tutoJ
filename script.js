
// declaration de l'objet Eleve
let Eleve = {
    nom:"Ousman",
    prenom:"Ali",
    age : 30
    };
    /* cette fonction affiche les informations d'un eleve dans une page HTML 
    en incrementant son age */
function htmlEleve(data){
        return `<li> ${data.nom} ${data.prenom} ${data.age++} </li>`;
    }