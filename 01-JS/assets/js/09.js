                            /* -----------------------------------------------------------------
                            |                             ~  LES BOUCLES  ~  😅                |
                            ------------------------------------------------------------------ */

// -- La boucle FOR

// Pour i = 1 ; tant que i <= strictement inférieur ou égale à 10  ; alors j'incrémente i de 1.
for(let i = 1 ; i <= 10; i++){
    document.write('<p>Inscription executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>')

var j = 1;
while(j <=10){
    document.write('<p>Inscription executée : <strong>' + j + '</strong></p>');
    j++;
}

// -- Supposons le tableau suivant
var prenoms = ['Jean','Marc','Luc','Pierre','Mathieu','Paul','Hugo']

for(let i = 0; i <= 7; i++){console.log(prenoms[i]);
}

console.log (' - - - ');

for(let i = 0 ; i <  prenoms.length ; i++) {
    console.log(prenoms[j]);
    j++;
}

console.log(' - - - ');
// -- Même exercice avec la boucle ForEach
// -- ATTENTION A LA PERFORMANCE !!!

prenoms.forEach(afficheprenoms);

function afficheprenoms(prenom,indince){
    console.log(prenom);
}