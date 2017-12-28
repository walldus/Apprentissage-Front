// alert('WOW Tu es sur ma page');

// Deux slash pour faire un commentaire uniligne

/* 
    Ici je peux faire un commentaire sur plusieurs ligne...

    raccourci : CTRL + /
           ou : CTRL + SHIFT + /

*/

// -- 1. Declarer une variable en JS
var Prenom

// -- 2. Affecter une valeur
Prenom = "Marie-Pierre";

// --3.
console.log(Prenom);

                            /* ------------------------------------------------------
                            |            ~  LES TYPES DE VARIABLES  ~  😅           |
                            ------------------------------------------------------- */


    // -- "typeof" me permet de connaitre le type de ma variable
console.log(typeof Prenom);

// -- Déclaration et affectation d'une valeur à une variable
var Age = 22;

// -- Afficher dans la console
console.log(Age);

// -- Verifier son Type
console.log(typeof Age);

                             /* ------------------------------------------------------
                             |             ~  LA PORTE DES VARIABLES   ~     😅      |
                             ------------------------------------------------------- */


    /* -- Les variables déclarées directement à la racine du fichier son appelées variables "GLOBALES".

    Elles sont disponible dans l'ensemble de votre document y compris dans les fonctions / boucles.

    La portée des variables GLOBALES s'arrête au fichier. Si je change de page, les variables n'existent plus.
    
    Les variables déclarées à l'intérieur d'une fonction sont appelées variables "LOCALES".
    
    Elles sont disponible uniquement à l'intérieur de celle-ci. -- */

    // -- Les Varibles de type FLOAT 

    var uneDecimale = -2.984;
    console.log(uneDecimale);
    console.log(typeof uneDecimale);   /* Pour copier une ligne automatiquement = ALT+ SHIFT + FLECHE DU HAUT OU DU BAS */
    

    // -- Les Booléens (VRAI / FAUX)

    var unBooleen = false; // -- true
    console.log(unBooleen);
    console.log(typeof unBooleen);


                            /* ------------------------------------------------------
                            |                   ~  LES CONSTANTES   ~     😅        |
                            ------------------------------------------------------- */


    /*      -- La déclaration des CONST permet de crée une constante accessible Uniquement en lecture...

    Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures.

    Une constante ne peut pas être déclarée à nouveau.    
    
    Généralement par convention les contantes sont en MAJUSCULES        -- */

    const HOST = "locahost";
    const USER = "root";
    const PAW = "mysql";

    // Je ne peux pas faire cela ...
    // USER = "127.0.0.1";
    // TypeError: Assignment to constant variable

    
                            /* ------------------------------------------------------
                            |                   ~  LA MINUTE INFO  ~      😅        |
                            ------------------------------------------------------- */


    /* -- Au fur et à mesure que l'on affecte ou ré-affecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type.

    En Javascript (ECMA scrpit - ES), les variables sont auto-typées
    
    Pour convertir une variable de type NUMER en STRING et STRIN G en NUMBER, je peux utiliser les fonctions natives de javascript  -- */

    console.log('---');

    var unNombre = "24";
    console.log(unNombre);
    console.log(typeof unNombre);

    // -- La fonction parseInt() permet de retourner un ENTIER à partir d'un STRING 
    unNombre = parseInt(unNombre);
    console.log(unNombre);
    console.log(typeof unNombre);

    // Je réaffecte une valeur à ma Varible
    unNombre = "12.55";
    console.log(unNombre);
    console.log(typeof unNombre);

    // -- La fonction parseFloat() permet de retourner un FLOAT à partir d'un STRING
    unNombre = parseFloat(unNombre);
    console.log(unNombre);
    console.log(typeof unNombre);

    // -- Conversion d'un Nombre en STRING avec toString()
    var unNombrequidevientString =10;
    console.log(unNombrequidevientString);
    console.log(typeof unNombrequidevientString);
    console.log(typeof unNombrequidevientString.toString() );
    


    
    