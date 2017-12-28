                            /* -------------------------------------------------------
                            |                    ~  LES FONCTIONS  ~  😅             |
                            -------------------------------------------------------- */

// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function ditBonjour() {
    // --Lors de l'appel de cette fonction, les instructions ci dessous serons éxecutées...
    alert("Bonjour !");
}

// -- Je vais appeler ma fonction " ditBonjour " et déclencher ses instructions.
ditBonjour();

// -- Déclarer une fonction qui prend une variable en paramètre
function Bonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + " <strong>!<p>");
}

// -- Appeler / utiliser une fonction avec des paramètres
Bonjour('Hugo', 'LIEGARD');

function addition(nb1, nb2){
    console.log(nb1 + nb2);
}
addition(1,3);

function addition (nb1, nb2){
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "<p>");