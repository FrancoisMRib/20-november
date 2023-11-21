/*
Exercice 24 DOM :
En vous inspirant de l'exemple ci-dessus :
Partie HTML :
-un titre h1 = liste des tâches,
-un input de type text (id= task),
-un bouton (id = add, onclick = addTask()) texte Ajouter,
-un bouton (id = delAllTask, onclick = delAllTask()) texte Tout Supprimer,
-un bouton (id = reload, onclick = reload()) texte Recharger la page,
-une div (id = tasks)
Partie JS :
-Créer une fonction addtask qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),:
-Récupérer la div (tasks)
Récupérer la valeur de l'input (id task),
-Créer un paragraphe,
Ajouter la valeur de l'input (id task)  au paragraphe,
Ajouter le paragraphe à la div (id = tasks)
-Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),
-Créer une fonction reload qui va à chaque clic sur le bouton recharger la page.

Bonus :
-Dans la fonction addTask (remplacer le code précédent) :
A chaque clic sur la fonction : 
      -ajouter une div (class = container),
          -> à l'intérieur de la div pour aller ajouter un paragraphe,
          -> récupérer le contenu de l'input texte (task) et passer la valeur au paragraphe,
          -> ajouter un bouton (id = delete, onclick = deleteTask(this),
          -> ajouter un bouton (id = update, onclick = updateTask(this),
          ->Ajouter une fonction deleteTask qui va :
             Supprimer la tache sélectionnée,
          -Ajouter une fonction updateTask qui va :
            Mettre à jour le nom de la tache depuis l'input du formulaire (id = task)
NB : on à besoin d'utiliser la création d'élément (createElement() et appendChild())
*/
const tasks = document.querySelector('#tasks');

function addTask() {
    const nouvTache = document.getElementById('task').value;
    //LIGNE DE CORRECTION
    //const nouvTache = document.querySelector('#task').value;
    //let resultAffich = document.getElementById('error');

    //resultAffich.textContent = "Une nouvelle tâche a été ajoutée !"
    //nouvTache.addEventListener('click', ()=> {
        //document.getElementById('div')
    //})
    if(nouvTache!=""){
        //créer une div
        const container = document.createElement('div');
        //ajouter une classe
        container.setAttribute('class', 'container');
        //créer un paragraphe
        const nouvPara = document.createElement('p'); 
        nouvPara.textContent = nouvTache ;
        //document.body.appendChild(nouvPara);
        //LIGNE DE CORRECTION
        tasks.appendChild(nouvPara);
    }

}
function delAllTask(){
    //boucle pour parcourir le premier enfant
    while(tasks.firstChild){
        //supprimer le premier enfant
        tasks.firstChild.remove();
    }
}
