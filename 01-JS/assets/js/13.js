                            /* ------------------------------------------------
                            |               ~  LES EVENEMENTS  ~  😅          |
                            ------------------------------------------------- */

/* 
Les évènements vont me permettre de déclencher une fonction, c'est à dire :une série d'instructions suite à une action de mon utilisateur.

OBJECTIF : Etre en mesure de capturer ces évènements afin d'éxécuter une fonction

Les évenements : MOUSE (souris)
    Click          : au clic sur un élément
    mouseenter     : la souris passe au dessus de la zone qu'occupe un élement
    mouseleave     : la souris sors de cette zone

Les evenements : KEYBOARD (Clavier)

    keydown        : une touche du clasvier est enfoncé
    keyup          : une touche du clavier a été relachée.

Les evenements : WINDOW (Fenêtre)

    scroll         : défilement de la fenêtre
    resize         : redimensionnement de la fenêtre

Les evenements : FORM (Formulaire)

    change         : pour les élements <input>, <select> et <textarea>
    submit         : à l'envoi (soumission) du formulaire
    input          : pour capter la saisie d'un utilisateur sur un champ <input>


########################## LES ECOUTEURS D'EVENEMENTS ##############################

    Pour attaché un évènement à un élément, ou autrement pour déclarer un écouteur d'événement qui se chargeras
    de déclencher une fonction, je vais utiliser la syntaxe suivante :

*/

var p = document.getElementById('MonParagraphe');

    // -- Je souhaite que mon paragrapge soit rouge au clic de la souris

    // -- 1. Je défini une fonction chargée d'éxécuter cette action
function changeColorToRed() {
    p.style.color = "red";
}

p.addEventListener("click", changeColorToRed);

// -- Création du champ Input
var input = document.createElement('input');

// -- Attribution d'un attribu
input.setAttribute('type','text');
input.setAttribute('placeholder','Saisissez un contenu...');

// -- Attribution d'un ID
input.id = 'monInput';

// --Ajout de l'élément dans ma page
document.body.appendChild(input);

// ---------------------------

function voirLaSaisieDeMonInput() {
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput)



