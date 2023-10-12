var age= 25 //declaration de variable+ instantiation + redeclaration et qui dit redeclaration dit aussi reinstantiatoiion
console.log(age);
var age =30
console.log(age);
let prenom='Mercy'//declaration de variable+ instantiation+ reinstantier
prenom= 'Serge'
console.log(prenom);
const nom ='therese' //const on donne une valeur ie on peut instantier la variable mais pas la déclarer
console.log(nom);

// Opération mathématique sur des variables

var number1 = 2
let number2 = 10
var resultat = number1 + number2
console.log('Op Addition 1er forme: '+resultat);

number1+=number2
console.log('Op Addition 2e forme: '+number1);

// var reste= number2%number1
// console.log('Reste de la division: ' +reste);
// Type de variable en js avec Typeof
console.log('Type de variable de Resultat est ' + typeof resultat);
var var1= null
var var2
var var3=20
var var4 = new Object()
var var5='bonjour'
var var6= true
console.log(`type var1 normalement null et js dit quoi `+ typeof var1 );
console.log(`type var2 normalement undefined et js dit quoi `+ typeof var2 );
console.log(`type var3 normalement number et js dit quoi `+ typeof var3 );
console.log(`type var4 normalement Object et js dit quoi `+ typeof var4 );
console.log(`type var5 normalement String et js dit quoi `+ typeof var5 );
console.log(`type var6 normalement boolean et js dit quoi `+ typeof var6 );

//instatiation des objets
var Etudiant= new Object();
//premiere methode
Etudiant.nom='Bedel';
Etudiant.prenom='Mercy'
Etudiant.age=22
console.log('etudiant object '+Etudiant.nom );
//2e methode
Etudiant={email:'email.eamil@gmail.com', classe:'1e infos'}
console.log(Etudiant);

// Conversion de type
//Premiere methode pour String
console.log(var2);
var2=String(var2)
console.log('Valeur de var2 '+var2);
console.log('Conversion de var2 '+typeof var2);
// 2e methode pour string
console.log(`conversion meth2  `+ var2.toString());
console.log(`conversion meth2 type `+typeof var2.toString());
// conversion en majuscule
console.log('Passer de miniscule en majuscule '+var5.toUpperCase());
console.log('taille de mon caractère '+ var5.length+ ' la taille est exacte');
console.log('Bonjour à tous');
console.log('TechDreamers');
console.log(`Bonjour à tous
    TechDreamers`);
//utilisation de template string
console.log(`Bienvenue au cours de logone
              ${var5} Mercy`);
// vs methode normale
console.log('Bienvenue au cours de logone\n'+var5+' Mercy');

// Array

//Declaration
var tab1=Array()
var tab3=new Array()
var tab2=[1,2,3]
console.log(`tab1 +${typeof tab1} tab2 +${typeof tab2} tab3 +${typeof tab3}`);
console.log(tab2[1]);
//stackage dans les array
tab1=['Mercy',Etudiant]
console.log(tab1[1].classe);
//ajout bà la derniere position
tab1.push('mon tableau')
console.log(tab1);
//suppresion à la derniere position
tab1.pop()
console.log(tab1);
//ajout à la 1e position
tab1.unshift('Le cours devient interessant')
console.log(tab1);
//suppression à la 1e position
tab1.shift()
console.log(tab1);

//map
tab2=tab2.map((x)=>x+5)
console.log(tab2);

//set

tab3=[1,2,7,8,2,3,1]

var montab=new Array('d1','d2','d3','d4')
console.log(montab);

montab.splice(2,0,prof=new Object())
console.log(montab);

montab[2]={nomProf:'th', matiere:'js', heure:2}
console.log(montab);
prof={nomProf:'therese', matiere:'js', heure:2}
montab[2]=prof
console.log(montab);

var mdpIns=true
var mdpSaisie=4588
//Boucle if et else
// if(mdpIns!=mdpSaisie)
// {
//     document.write("Mot de passe incorrecte")
// }else{
//     document.write("Mot de passe correcte")
// }

//Boucle if ifelse

if(mdpIns==mdpSaisie)
document.write('Correcte')
else if (typeof mdpIns!= typeof mdpSaisie) {
    document.write('Les types de variables sont différents')
} else {
    document.write("Mot de passe correcte")
}

//switch
var n=10
switch (n) {
    case 0:
        console.log('Climatiseur eteint');
        break;
    case 1:
        console.log('Climatiseur allumé');
        break;

    default:
        console.log('climatiseur en veille');
        break;
}

//for 
for (let index = 0; index < montab.length; index++) {
    console.log(montab[index]);
    console.log(`index = ${index}`);
    
}

//While
while (n>5) {
    console.log('Bonjour');
}