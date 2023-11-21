/*
Exercice 23 DOM :
Partie HTML :
Ajouter dans la page les éléments suivants :
-1 input type text (id = email),
-1 input type password(id= password),
-1 input type button (id=bt)
Partie JS :
1 Ajouter un écouteur événement (keyup (touche clavier est relâchée )-> input (id= email) 
         -> vérifier si le contenu de l'input (id= email) match  le pattern suivant :
                   --
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         -> si le email match le pattern mettre l'input (email) en vert (backgroundColor)
         -> sinon mettre l'input (email) en rouge(backgroundColor)
2 Ajouter un écouteur événement (blur(désélection de l'input)-> input (id= password) 
         -> vérifier si le contenu de l'input (id= password) match  le pattern suivant :
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

         -> si le password match le pattern mettre l'input (password) en vert (backgroundColor)
         -> sinon mettre l'input (password) en rouge(backgroundColor)
Bonus : Ajouter un paragraphe (id = error)  dans la partie HTML :
Afficher à l'intérieur :
Si le password et l' email sont valides => valide,
Si le password ou l' email sont invalides => invalide ,
Utiliser test() plutôt que match() dans vos conditions.
*/

let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

const emailInput = document.getElementById('email') ;
const passwordInput = document.getElementById('password') ;

emailInput.addEventListener('keyup', ()=>{
    if (emailInput.value.match(regexEmail)) {
        emailInput.style.backgroundColor = "green" ;
    }
    else {
        emailInput.style.backgroundColor = "red" ;
    }
})
passwordInput.addEventListener('blur', ()=>{
    if (passwordInput.value.match(regexPassword)) {
        passwordInput.style.backgroundColor = "green" ;
    }
    else {
        passwordInput.style.backgroundColor = "red" ;
    }
})

//CORRECTION Bonus
//Récupérer le bouton
const bt = document.getElementById('bt');
//Récupérer le paragraphe
const paragraphe = document.getElementById('error');
//ajuter un événement clic sur le nom)
bt.addEventListener('click', ()=> {
    //test si le mail et le password sont valides
    if(regexEmail.test(email.value) && regexPassword.test(passwordInput.value)) {
        paragraphe.textContent = "valide";
    } else {
        paragraphe.textContent = "invalide";
    }
})