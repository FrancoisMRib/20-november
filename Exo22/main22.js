/*
Exercice 22 DOM :
Transformer l'exercice 6 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
Partie HTML :
Ajouter  les éléments suivants :
-un titre h1 -> calculer le prix TTC,
-un input de (type text, id = prixHt),
-un input de (type text, id = quantite),
-un bouton (onclick =calculer()),
-un paragraphe (id= resultat),
Partie JS :
Créer une fonction calculer :
-récupérer les valeurs des 2 inputs,
-refaire le calcul comme dans l'exercice 6 (correction),
-Afficher le résultat dans le paragraphe (id= resultat)
*/

//version 1 en créant le tableau et en ajoutant les valeurs directement
//création du tableau avec les 3 valeurs
/* let articles = [prompt("Saisir le nom de l'article"),parseFloat(prompt("Saisir le prix HT")),parseInt(prompt("Saisir quantité"))];

let prixTtcArticle = articles[1]*1.20*articles[2];
console.log(`Le prix ttc de ${articles[0]} est égal à ${prixTtcArticle.toFixed(2)}`); */

//version 2 avec création du tableau (push des 3 valeurs ensuite)
/*
let articles2 = [];
articles2.push(prompt("Saisir le nom de l'article"));
articles2.push(parseFloat(document.getElementById('prixHt')));
articles2.push(parseInt(document.getElementById('quantite')));
//calculer le prix TTC
let prixTtc = (articles2[1]*1.20*articles2[2]).toFixed(2);
console.log(`Le prix TTC de :${articles2[0]} est égal à ${prixTtc} €`);

//version avec un tableau associatif
//stocker dans un tableau associatif
/*
let articles3 = {
    "nom":prompt("Saisir le nom de l'article"),
    "prixHt": parseFloat(prompt("Saisir le prix HT de l'article")),
    "quantite": parseInt(prompt("Saisir la quantité de l'article"))
}

articles3.prixTtc = (articles3.prixHt*articles3.quantite*1.20).toFixed(2);
console.log(`Le prix TTC de : ${articles3.nom} est égal à ${articles3.prixTtc} €`)
*/

function calculer() {
    let prixHt = document.getElementById('prixHt').value;
    let quantite = document.getElementById('quantite').value;
    let para = document.querySelector('p');
    let result = prixHt*quantite*1.20;
    para.textContent = "Le prix total est égal à "+result.toFixed(2)+" €." ;
}

//CORRECTION : partie pour vérifier si les champs sont remplis et que les valeurs sont des nombres
if (prixHt.value !="" && quantite.value !="" && !isNaN(quantite.value) && !isNaN(prixHt.value))