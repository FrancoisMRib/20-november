
/*
Exercice 19 DOM :
Ajouter les éléments HTML suivants dans votre page index.html :
-Titre h1 avec un texte à l'intérieur,
-Une div avec du texte à l'intérieur,
-Dans la div un paragraphe avec du texte à l'intérieur,
En JS :
Vous allez changer:
-la taille de la police du titre h1 en 14 px,
-la police de la div et du paragraphe en Arial,
-la couleur du texte du paragraphe en vert,
-Ajouter un margin top à la div de 30 px,
Remplacer :
-le contenu du titre h1 par -> nouveau titre,
-le contenu du paragraphe -> nouveau contenu du paragraphe.
NB : En utilisant querySelector. (textContent pour remplacer le texte)
Bonus : remplacer le texte de la div sans suppimer le paragraphe à l'intérieur.


function changeTaille(taille) {
    document.getElementById("texte").style.fontSize = taille ;
}

changeTaille(14);
*/

//Partie JS
const titre = document.querySelector('h1');
    titre.style.fontSize = '14px';


const div = document.querySelector('div');
    div.style.fontFamily = 'Arial';

const paragraphe = document.querySelector('p');
//const paragrpahe = document.querySelector('div > p') ;
    paragraphe.style.color = 'red' ;

//soit dit en passant, on est pas obligés de mettre le x.style.truc à la suite de la const. 
console.log(paragraphe);

const marginUp = document.querySelector('div');
    marginUp.style.marginTop = '50px' ;

//Partie remplacement :
titre.textContent = 'Nouveau titre';
paragraphe.textContent = 'Nouveau contenu du paragraphe';

//bonus
div.firstChild.textContent = 'texte remplacé' ;