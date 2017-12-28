                                    /* _____________________________________________________
                                    |                ~~ LES SELECTEURS~~                   |
                                    |______________________________________________________|*/

// -- Format : $('selecteur')
// -- En JQuery, tous les sélécteurs CSS sont disponibles

$(function() {
    // -- DOM ready !

    function l(e) {
        console.log(e);
    }

    // -- Selectionner les balises SPAN :

    // -- version Javascript :
    l(document.getElementsByTagName('span'));

    // --Version JQuery
    l($('span'));

// -- Selectionner mon Menu :

    // -- Version Javascript :
    l(document.getElementById('menu'))

    //  Version JQuery
    l()
});
