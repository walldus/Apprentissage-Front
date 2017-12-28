                            /* -----------------------------------------------------------------
                            |                 ~  LA MANIPULATION DES CONTENUS  ~  😅          |
                            ----------------------------------------------------------------- */

function l(e) {
    console.log(e)
}           

// -- Je souhaite récupérer mon lien; comment procéder
var google = document.getElementById('google');
l(google);

// -- Maintenant, je souhaite accéder aux informations de ce lien...

    // -- A : Le lien vers lequel pointe la balise
    l(google.href)

    // -- B : l'ID de la balise
    l(google.id)

    // -- C : La classe de la balise
    l(google.className)

     // -- D : Le texte de la balise
     l(google.textContent)

/* 
Maintenant je souhaite modifier le contenu de mon lien !
Comme une variable classique je vais simplement venir affecter une nouvelle valeur.
*/

google.textContent = "Mon lien vers Google !";


                            /* -----------------------------------------------------------------
                            |               ~  AJOUTER UN ELEMENT DANS MA PAGE  ~  😅          |
                            ----------------------------------------------------------------- */

/*
Nous allons utiliser 2 méthodes :
1. La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM;
que je pourrais par la suite modifier avec les méthodes que nous venons de voir.
PS : Ce nouvel élement est placé en mémoire.
*/

// -- Définition de l'élément
var span = document.createElement('span');

// -- Si je souhaite lui donner un ID
span.id="MonSpan";

// -- Si je souhaite lui attribuer du contenu...
span.textContent = "Mon beau texte en JS !";

// -- Comment ajouter l'élément dans la page ?
// -- La fonction appenChild() va permettre de rajouter un enfant à un élement DOM.
google.appendChild(span);

// -- Création de la balise h1
var h1 = document.createElement('h1');

// -- Création de ma balise a
var a = document.createElement('a');

// -- Titre de mon article
a.textContent = "Titre de mon article";

// -- je veux donner un lien à mon lien
a.href = '#';

// -- appenChild()

    // -- Je met mon lien (a) dans mon h1
    h1.appendChild(a);

    // -- Je met mon h1 dans mon body
    document.body.appendChild(h1);

    a.style.color = "red";
    a.style.textDecoration = "none";