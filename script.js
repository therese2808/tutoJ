/*//voici mon code js 
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
console.log(number1);

// declaration objet

var Etudiant= new Object();
Etudiant={ prenom:0.0, email:'a@a.com'};
Etudiant.nom='Mercy';
Etudiant.age=25;
Etudiant.prenom = Boolean(Etudiant.prenom);
console.log(Etudiant);


console.log(typeof(Etudiant.prenom));

function etudes(){
    var voiture= new Object();
    function mecanique(){
        console.log(typeof (voiture));
    }
    mecanique();
}
etudes();


prenom= new Object();
var toto='tarta';
console.log(toto);
prenom= { nom: toto};

f(prenom);
function f(Object){
    console.log('test');
}
*/
var prof ="true";
console.log(prof.length);
console.log(prof[1]);
console.log(typeof(prof.toString()));
var x= eval(3/4)
console.log(typeof x);
var test= 'Paul est un professeur \n'
+prof
console.log(test);