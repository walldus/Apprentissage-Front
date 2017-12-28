                            /* ----------------------------------------------
                            |         ~  LA CONCATENATION  ~  😅            |
                            ----------------------------------------------- */
                            
var debutDePhrase        = "Aujourd'hui ";
var laDate               = new Date();
var suiteDePhrase        = ", sont présents : ";
var nombreDeStagiaires   = 18;
var finDePhrase          = "stagiaires.<br>";

// -- Nous souhaitons maintenant grâce à la concaténation afficher tout ce petit monde, en un seul morceau !

document.write( debutDePhrase + laDate.getDate() + '/' + ( laDate.getMonth() +1) + '/' + laDate.getFullYear() + nombreDeStagiaires + finDePhrase );

var phrase1 = "Je m'apelle ";
var phrase2 = "Hugo et j'ai ";
var age     = 28;
var phrase3 = " ans !";

document.write( phrase1 + phrase2 + age + phrase3 );
