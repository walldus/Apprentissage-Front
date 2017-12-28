                            /* ----------------------------------------------------
                            |                      ~  LE DOM  ~  😅               |
                            ----------------------------------------------------- */

/* 

Le DOM est une interface de développement en JS pour HTML, grace au DOM, 
je vais être en mesure d'accéder /
modifier mon HTML.

L'objet "document" : c'est le point d'entrée vers mon contenu HTML.

Chaque page charger dans mon navigateur à un objet "document".

*/


// -- Comment puis-je faire pour récupérer les différentes informations de ma page HTML ?

/* 
~~~~~~ document.getElementById ~~~~~~~~ 

document.getElementById() : c'est une fonction qui va permettre de récupérer un élement HTML à 
partir de son identifiant unique : ID
*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);

/* 
~~~~~~ document.getElementByClassName ~~~~~~~~ 

document.getElementByClassName() : c'est une fonction qui va permettre de récupérer un  ou plusieurs 
élement (une liste) HTML à partir de leur classe.

*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// -- Me renvoi un tableau JS avec mes éléments HTML, ou encore autrement dit une "collection".


/*
~~~~~~ document.getElementByTagName ~~~~~~~~ 

document.getElementByTagName() : c'est une fonction qui va permettre de récupérer un  ou plusieurs 
élement (une liste) HTML à partir de leur * nom de balise.

*/

var span = document.getElementsByTagName("span");
console.log(span);