                                    /* _____________________________________________________
                                    |                ~~ LES SELECTEURS~~                   |
                                    |______________________________________________________|*/

$(function() {

    // -- Je souhaite cacher toutes les divs de ma page HTML
    console.log($('div'));

    $('div').hide('slow', function() {
        // -- Une fois que la méthode hide() est terminée, mon alerte peux s'éxécuter.
        alert('Fin du Hide');
        // -- Note : La fonction s'éxécuteras pour l'ensemble des élements du sélécteurs

        $('div').css('color','red');
        $('div').css('background','yellow');

        // -- Je fait réapparaitre mes divs
        $('div').show('slow');

    }); // Fin de fonction anonyme

    $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);
    
})