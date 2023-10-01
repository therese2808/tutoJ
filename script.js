//voici mon code js 
var nom= 'mercy';// declaration
nom ='Olivier';//instiation
var nom = 'Apotre';//redeclaration
console.log('le nom est :');
console.log(nom);
let prenom = 'ali'; //declaration
console.log('le prenom est :');
prenom = 'Fermat';
console.log(prenom);
const age=20;
console.log('l age est :');
console.log(age);

var bool = true;

// Operation sur les variables

var number1= 10;
var number2= 5;

// addition 
console.log("Addition");
console.log(number1+number2);

// Soustration 
console.log("Soustration");
console.log(number1-number2);

// Multiplication 
console.log("Multiplication");
console.log(number1*number2);

// Division 
console.log("Division");
console.log(number1/number2);

// Modulo 
console.log("Modulo");
console.log(number1%number2);

// Exponentielle 
console.log("Exponentielle");
console.log(number1**number2);

//affectation

number1+=number2
console.log(`affectation `+number1);

// incrementation
var i=0
i++;
console.log('incrementation '+i);
i=10
i--;
console.log('décrementation '+i);

// Type de variable
console.log('Type de variable '+number1);

// declaration objet

var Etudiant= new Object();
Etudiant={ prenom:0.0, email:'a@a.com'};
Etudiant.nom='Mercy';
Etudiant.age=25;
Etudiant.sexe='f'
Etudiant.prenom = Boolean(Etudiant.prenom);
console.log("Declaration des objets");
console.log(Etudiant);

console.log("Type des champs");
console.log(typeof(Etudiant.prenom));

function etudes(){
    var voiture= new Object();
    function mecanique(){
        console.log('type voiture dans la fonction '+typeof (voiture));
    }
    mecanique();
}
etudes();
// ici il y'aura une eurreur car voiture est propre à la fonction etude
//console.log(voiture);

prenom= new Object();
var toto='tarta';
console.log(toto);
prenom= { nom: toto};

f(prenom);
function f(Object){
    console.log('test');
}

// taille des chaines de caractères
var prof ="true";
console.log('taille des caractères'+prof.length);
console.log(prof[1]);
console.log(typeof(prof.toString()));
var x= eval(3/4)
console.log(typeof x);
var test= 'Paul est un professeur \n'
+prof
console.log(test);

//Tableaux
// Declaration tableau
var employe = []
console.log(`Declaraion crochet `+typeof employe);
var employe = ["employé1","emloyé2","employé3"]
console.log(`Declaraion instation `+  employe);
//x var employe = new Array()
// console.log(`Declaraion new array `+typeof employe);

// manipulation array
console.log(employe[0]);
//taile d'un array
console.log(employe.length);
//que peut on stocker dans un array
let array= ["etudiant",true, function testEtudiant(){
    console.log(employe);
}]
console.log(typeof array[2]);
//ajout dans array à la derniere ligne
array.push('etudes')
console.log(array);

//Supprimer dans un tableau à la dernière ligne
array.pop()
console.log(array);

//ajout dans array à la première ligne

console.log(array.unshift('therese','olivier', 'apotre'));
console.log(array);

//Supprimer dans un tableau à la première ligne
console.log(array.shift())
console.log(array);

//Utilisation de map

let array1= array.map(x=>x+3)
console.log(array1);

//Structure repetive et conditionnelle

var toto= 2
var tata =2
// boucle if
if(tata!==toto)// je n'ai pmas mis les crochet car je n'ai plus de 2 lignes
console.log('comparaison reussie');

// boucle iifelse
if(tata===toto)
console.log('sont similaires');
else
console.log('sont differents');
//boucle if else if
if(tata==toto)
console.log('sont similaires');
else if(toto!=tata)
console.log('sont differents');
else
console.log(typeof(toto)==typeof tata);
console.log(`N'ont pas le même type`);

Etudiant = {nom:'Appotre', prenom:'therese', solde:"test"}
// Switch
switch (Etudiant.solde) {
    case 'paye':
        document.write('Etudiant a paye')
        break;
    case 'impaye':
        document.write(`Etudiant n'a pas paye`)
        break;
    case 'inscrit':
    document.write(`Etudiant est inscrit`)
    break;
    default:
        document.write('Potentiel etudiant')
        break;
}
//Boucle ternaire
(tata===toto)?console.log('sont similaires'):console.log('sont differents');

// Boucle For
// avec l'incrementation
tab=[Etudiant]
tab[0]= {nom:'Appotre', prenom:'therese', solde:"test"}
tab[1]={nom:'Ali', prenom:'olivier', solde:"paye"}
tab[2]={nom:'mercy', prenom:'serge', solde:"impaye"}
for(let i = 0;i>tab.length;i++){
    console.log(tab[i]);
}
// avec decrementation
for(let i = tab.length;i>=0;i--){
    console.log(tab[i]);
}
// boucle while
n= 0
while (n<3) {
    n++;
    console.log(n);

}
Etudiant ={nom:'th', prenom:'test', age:22}
//fonction
/*function etudiantfonction(Etudiant){
    var concition
   (Etudiant.age<20)? concition= true:concition=false
   return concition
}*/
// 2e facon d'ecrire la fonction etutiantfonction
function etudiantfonction(Etudiant){
    if(Etudiant.age<20)
    return true
else return false
}

function afficheEtudiant(Etudiant) {
    console.log(Etudiant.nom +' ' +
        Etudiant.prenom +
        Etudiant.age)

}
afficheEtudiant(Etudiant)
var condition=etudiantfonction(Etudiant)
console.log(condition);
var num= 5
// exeption
try {
   if (num%2!=0)
    throw new Error ('Nombre impair')
} catch (error) {
    console.log(error);
}finally{
    console.log('Exception executée');
}