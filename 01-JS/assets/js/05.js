                            /* -------------------------------------------------------
                            |       ~  INCREMENTATION & DECREMENTATION  ~  😅        |
                            -------------------------------------------------------- */

//  ########### Incrémentation ############ //

    var nb1 = 1;
    nb1 = nb1 + 1;

    // -- Affichage dans la console
    console.log(nb1)

    // -- Ecriture simplifié
    nb1++; // Raccourci de nb1= nb + 1 -> Par pas de 1

    // -- Affichage dans la console
    console.log(nb1);

// ############# Décrémentation ############ //

    // -- Ecriture simplifié
    nb1--; // Raccourci de nb1= nb - 1 -> Par pas de 1

    // -- Affichage dans la console
    console.log(nb1);

// ############# Subtilité ############ //

    nb1 = 0;
    console.log("nb1++ = " + nb1++);
    nb1 = 0;
    console.log("++nb1 = " + ++nb1);