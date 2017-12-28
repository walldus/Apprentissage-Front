/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var Etudiants = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        matieres    : {
                        francais   : 14,
                        math       : 7,
                        physique   : 11,
                        eps        : 18
                      }
    },
    {
        prenom      : "Jean",
        nom         : "BEURRE",
        matieres    : {
                        francais   : 15,
                        math       : 9,
                        physique   : 16,
                        eps        : 13
                      }
    },
    {
        prenom      : "Jean",
        nom         : "PEPLU",
        matieres    : {
                        francais   : 2,
                        math       : 16,
                        physique   : 18,
                        eps        : 2
                      }
    },
    {
        prenom      : "Jean",
        nom         : "YVES",
        matieres    : {
                        francais   : 5,
                        math       : 11,
                        physique   : 3,
                        eps        : 14                          
                      }
    },
    {
        prenom      : "Wallid",
        nom         : "ISMIEL",
        matieres    : {
                        francais   : 18,
                        math       : 17,
                        physique   : 19,
                        eps        : 18
                      }
    }


];

// Les flemmards.js

function w(CeciEstUnParametreDeMaFonction) {
    document.write(CeciEstUnParametreDeMaFonction)
}

function l(e) {
    console.log(e)
}

l(Etudiants)

w('<ol>');
for(let i = 0 ; i < Etudiants.length ; i++) {

    // -- On récupère l'objet de Etudiant de l'Itération
    let Etudiant = Etudiants[i];

    // -- Aperçu dans la console
    l(Etudiants);

    // -- Ici mes variables seront remises à 0 à chaque nouveau étudiant (itération)
    var NombreDeMatiere = 0, SommeDesNotes = 0;

    // -- Afficher le prénom et le nom
     w('<li>');
            w(Etudiant.prenom + ' ' + Etudiant.nom);
            // -- Afficher la moyenne de l'étudiant aux différentes matiéres
         w('<ul>');
            for(let matiere in Etudiant.matieres) {
                l(matiere);
                l(Etudiant.matieres[matiere])
                
                NombreDeMatiere++;
                SommeDesNotes += Etudiant.matieres[matiere];

                w('<li>');
                    w( matiere + ' : ' + Etudiant.matieres[matiere] );
                w('</li>');
             } // -- Fin de la boucle Matière
             w('<li>');
                w('<strong>Moyenne Générale : </strong>' + (SommeDesNotes / NombreDeMatiere ) );
             w('</li>');
        w('</ul>');
    w('</li><br>');
} // -- Fin de la boucle Etudiant
w('</ol>');