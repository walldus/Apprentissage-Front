/* ------------------------------  EXERCICE ----------------------------------

function presentation(prenom, age){
    var prenom = prompt("Rentrez votre prénom", "Votre prénom");

    alert ("Bonjour " + prenom + " quel age as tu ?")

    var age = prompt("Rentrez votre age", "Votre age");

    alert ("Tu es donc né en " + age );

    return "bonjour " + prenom + " tu as " + laDate.getFullYear() + " ans ";
}
document.write (presentation("prenom","age"));

-------------------------------------------------------------------------------- */

// Correction

// 1. Initialisation des variables
var dateObj             = new Date();
var anneeActuelle       = dateObj.getFullYear();
// 2. Création d'une fonction
function Hello(){

    // 2a. Je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?","<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b. Je lui demande son age
    let age = parseInt( prompt("Hello  " + prenom + " ! How old are you ?", "<Saisir votre Age>") );
    console.log(age);
    console.log(typeof age);

    // 2c. Déduire l'anée de naissance, et l'afficher dans une "alert"
    alert("AMAZING ! So you were born in " + (anneeActuelle - age ) + "!");

    // 2d. J'affiche le tout dans la page (Récapitulatif)
    document.write("Hello "+ prenom + " it's amazing ! you're " + age +" years old !");
}
// 3. Execution de ma fonction
Hello();