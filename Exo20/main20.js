/*
Exercice 20 DOM :
Créer une page HTML qui va contenir les éléments suivants :
-Un titre h1 -> "Liste des utilisateurs",
-Une div,
-Dans la div ajouter :
        --1 balise img,
        --3 paragraphes,
Depuis l'objet JS ci-dessous (remplacer les valeurs par vos propres informations):
 const user = {
  'id' : 1,
  'nom': 'votre nom',
  'prenom': 'votre prénom',
  'age': votre age,
  'image' :'./logo.jpg'
}

-
-
-
Mettre en forme en JS les éléments suivants :
-
-,
-
-remplacer la couleur de fond de la div : rgb(220, 220, 220).
NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent
*/

const user = {
    id : 1,
    nom : 'Ribere',
    prenom : 'François', 
    age : 26,
    image :'./logo.jpg'
  }

// Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
const div = document.querySelector('div');
  div.setAttribute('id', user.id) ;

//Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
const premierPara = document.querySelector('div > p');
premierPara.textContent = user.nom ;
console.log(premierPara)

const deuxiemePara = document.querySelector('div > p+p');
deuxiemePara.textContent = user.prenom ;

const troisiemePara = document.querySelector('div > p+p+p');
troisiemePara.textContent = user.age ;

//CORRECTION :
//version nodelist
const liste = document.querySelectorAll('p');
//versio html
const liste2 = document.getElementsByTagName('p');
liste[0].textContent = user.nom ;

//Remplacer l'image par l'url contenu dans user.image
//user.textContent = https://cdn.discordapp.com/attachments/1151090232683405324/1176117311510433832/logo.jpg?ex=656db39a&is=655b3e9a&hm=427eaccaf3e63024114fdd9c79b62fc9a8ae1ccebcdd9cf5ac128c2a0ab85b0e& ;

//Mettre en forme les éléments suivants : paragraphe nom, prenom, age : police taille 11 px, couleur blue,

premierPara.style.fontSize = '11px' ;
premierPara.style.color = 'blue';

deuxiemePara.style.fontSize = '11px' ;
deuxiemePara.style.color = 'blue';

troisiemePara.style.fontSize = '11px' ;
troisiemePara.style.color = 'blue';

// taille de l'image : 100 px de large et 100 px de long

const tailleImage = document.querySelector('div > img');
tailleImage.style.width = '100px';
tailleImage.style.height = '100px';

//Aligner l'image à en haut à droite et ajouter un margin de 10 px.

//tailleImage.style.right = ;
tailleImage.style.margin= '10px';