                                    /* _____________________________________________________
                                    |             ~~ LA DISPONIBILITE DU DOM ~~            |
                                    |______________________________________________________|*/

/* A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence de ma page est complétement chargé je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction cette fonction sera appelé AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement défini.

3 façon de faire :
*/

jQuery(document).ready(function() {
// -- Ici , le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 2 éme possibilité
$(document).ready(function() {
    // -- Ici , le DOM est entièrement chargé, je peux procéder à mon code JS.
});

// -- 3 éme possibilité
$(function(){
    alert("J'ai 20 ans!");
});

    // -- En JS :
    document.getElementById('TextEnJQuery').innerHTML = "<strong> Mon texte en JS </strong>";

    // -- En Jquery, les séécteurs sont les mêmes qu'en CSS :
    $('#TexteEnJQuery').html('Mon Texte en JQ');