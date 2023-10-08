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

// Conversion de type
//Premiere methode pour String
var2=String(var2)
console.log('Valeur de var2 '+var2);
console.log('Conversion de var2 '+typeof var2);
// 2e methode pour string
console.log(`conversion meth2  `+ var2.toString());
console.log(`conversion meth2 type `+typeof var2.toString());
// conversion en majuscule
console.log('Passer de miniscule en majuscule '+var5.toUpperCase());
console.log('taille de mon caractère '+ var5.length);
//utilisation de template string
console.log(`Bienvenue au cours de logone
              ${var5} Mercy`);
// vs methode normale
console.log('Bienvenue au cours de logone\n'+var5+'           Mercy');