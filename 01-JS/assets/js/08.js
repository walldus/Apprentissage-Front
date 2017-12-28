                            /* -------------------------------------------------------
                            |                    ~  LES CONDITIONS  ~  😅             |
                            -------------------------------------------------------- */

/* var MajoriteLegaleFR = 18;

if(18 >= MajoriteLegaleFR) {
    alert('Bienvenue !');
}
else{
    alert('Google');
}     */


/* ------------------------------------------------

Créer une fonction permettant de vérifier l'age d'un visiteur (prompt)
S'il a la majorité légale, alors je lui souhaite la bienvenue
sinon je fait une redirection sur google après lui avoir signalé le soucis

---------------------------------------------------- */
var Majo = 18;

function Age(){
    let age = prompt ("Rentrez votre age");
    if(age >= Majo){
        alert('Bienvenue');
    }
    else{
        document.location.href="http://google.fr";
    }
}
Age();


// ~~ CORRECTION ~~ 

/* Si l'age de l'utilisateur passé en paramètre en supérieur ou en égale à la majorité légale, 
alors la fonction retourne vrai.
Sinan elle retourne faux.

*/
function verifierAge(age){
    if(age >=Majo){
        return true
    }
    else{
        return false
    }
}
var age = prompt ("Bonjour, quel age avez-vous?","<Saisissez votre age>");
if(verifierAge(age)){
    alert('Bienvenue sur mon site internet reservé pour les majeurs');
}
else{
    document.location.href="http://google.fr";
}


                            /* -------------------------------------------------------------------
                            |                 ~  LES OPERATEURS DE COMPARAISON  ~  😅             |
                            --------------------------------------------------------------------- */

/* ----- L'opérateur de comparaison " == " signifie : égal à, il permet de vérifier que 2 variables sont identiques.

L'opérateur de comparaison " === " signifie : strictement égal à. Il va comparer la valeur et le type de donnée.

L'opérateur de comparaison " != " signifie différent de

L'opérateur de comparaison " !=== " signifie strictement différent de -------------- */

var email,mdp;

var email ="wf3@h1-media.fr";
var mdp ="wf3";

// --1. Demander a l'utilisateur son e-mail
var emailUser = prompt("Bonjour, quel est votre email?","<Saisissez votre email>");

// --2. Je verifie si l'email saisie (emailuser) correspond à celui en BDD (email)
if(emailUser == email){
    // 2a. Tout est ok je continu vers la vérification avec le mot de passe.
    // 2a1. Je demande à l'utilisateur son mot de passe
    var mdpUser = prompt("Votre mot de passe?","<Saisissez votre mot de passe>");

    // 2a2. Vérification du mot de passe
    if(mdpUser == mdp){
        alert("ATTENTION , nous n'avons pas reconnu votre mot de passe");
    }
} else{
    // 2b.Les emails ne correspondent pas...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email");
}

// -- EXEMPLE AVEC LES FONCTIONS

function monUtilisateurEstCorrect(emailUser,mdpUser){
    if(emailUser === email && mdpUser === mdp){
        return true
    } else{
        return false
    }
}

var mdpUser = prompt("Votre mot de passe?","<Saisissez votre mot de passe>");
var emailUser = prompt("Bonjour, quel est votre email?","<Saisissez votre email>");

if (monUtilisateurEstCorrect(emailUser,mdpUser) ){
    alert("Bienvenue" + emailUser);
} else{
    aert("ATTENTION, email/mot de passe incorrect");
}

                            /* -----------------------------------------------------------------
                            |                    ~  LES OPERATEURS LOGIQUES  ~  😅             |
                            ------------------------------------------------------------------ */

/* 

#### L'opérateur ET : && ou AND ####
Si la combinaison emailUser et email correspond et la combinaison mdpUser ET mdp correspond. 
--- > Dans cette condition, les 2 doivent obligatoirement correponsdre pour être validé
Ex. if (emailUser == email && mdpUser == mdp) {...}

#### L'opérateur OU : || ou OR ####
Si la combinaison emailUser et email correspond et la combinaison mdpUser ET/OU mdp correspond.
--- > Dans cette condition, au moins l'une des deux doit correspondre pour être valideée
Ex. if (emailUser == email || mdpUser == mdp) {...}

#### L'opérateur "!" ou encore NOT ####
L'opérateur "!" signifie le CONTRAIRE DE ... ou NOT
var monUtilisateurEstApprouve = true;
if (!monUtilisateurEstApprouve) {...} : Mon utilisateur n'est pas approuvé  
*/