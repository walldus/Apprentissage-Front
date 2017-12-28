// -- Déclaré un tableau indéxé.
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau indéxé.
monTableau[0] = "Marie-Pierre";
monTableau[1] = "Hugo";
monTableau[2] = "Hamid";

// -- Afficher le contenu de mon tableau dans la console.
console.log(monTableau[1]); // -- Hugo
console.log(monTableau[2]); // -- Hamid
console.log(monTableau); // -- Affichés toutes les donnés

// Déclaré et affecter des valeurs à un tableau indéxé
var NosPrenoms = [ "Thomas", "Olivier", "Marie-Pierre", "Cholé", "Hugo"];
console.log(NosPrenoms);

// -- Déclaré et affecter des valeurs à un Objet
// Pas de tableau associatif en JS
var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGARD",
    age    : 28
};
console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Je vais créer deux tableaux indéxés
var listeDePrenoms =["Hugo", "Marie-Pierre", "Romain", "Lounis"];
var listeDeNoms    =[ "LIEGARD", "DUPOUX", "DGADEN", "ELIE"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux précedents.
var Annuaire = [ listeDePrenoms, listeDeNoms ];
console.log(Annuaire);

// -- Hugo LIEGEARD
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

// -- Exercice

var listeDePrenoms              =["Wallid","Aristide","Hamid"];
var listeDeNoms                 =["Ismiel","Sikou","Pitou"];
var tele                        =["0634656565","0625787878","0652858585"];
var AnnuaireDesStagiaires       =[listeDePrenoms,listeDeNoms,tele];
console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0][0]);
console.log(AnnuaireDesStagiaires[2][2]);

// -- Correction

 var AnnuaireDesStagiaires = [
    { prenom : 'hugo', nom : 'Liegeard', tel : '0783971515' },
    { prenom : 'chloe', nom : 'thuillier', tel : 'XX XXX XX' },
    { prenom : 'anis', nom : 'chabani', tel : 'XX XXX XX' }
 ];

 console.log(AnnuaireDesStagiaires);
 console.log(AnnuaireDesStagiaires[1]);
 console.log(AnnuaireDesStagiaires[1]['prenom']);
 console.log(AnnuaireDesStagiaires[1].prenom);

 // -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);


                            /* ------------------------------------------------------
                            |               ~  AJOUTEZ UN ELEMENT  ~  😅            |
                            ------------------------------------------------------- */

var Couleurs = [ "Rouge", "Jaune", "Vert" ];

/* Si je souhaite ajouter un élément dans mon tableau. */

// -- Je fait appel à la fonction push() qui me renvoi le nombre d'élements de mon tableau.

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange"); /* le "var nombre...." est juste pour voir le nombre de variables sur l'inspecteur mais la commande est le push le var n'est donc pas obligatoire. */
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/* NB : La fonction unshift permet d'ajouter un ou plusieurs éléments en début de tableau. */


                            /* --------------------------------------------------------------------
                            |         ~  RECUPERER ET SORTIR LE DERNIER ELEMENT  ~  😅            |
                            --------------------------------------------------------------------- */
                            
                            
    /* La fonction pop () me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.

    La même chose est possible avec le premier élément; en utilisant la foncion shift ().

    NB : La fonction splice() vous permet de faire sortir un ou plusieurs élements de votre tableau. */

    var monDernierElement = Couleurs.pop();
    console.log(monDernierElement);
    console.log(Couleurs);