const Ecris = document.querySelector("#zoneTexte");
const Lis = document.querySelector("#aperçu");
const Apparition = document.querySelector("#apparition");



//fonction pour faire marcher le compteur de caractere    NE PAS METTRE DE # dans getelementbyID
function charcountupdate (){
    let compteur = Ecris.value.length ;
    document.getElementById("compteur1").innerText = compteur + "/200";

}

//miroir entre les deux zone texte et affichage du compteur de caractères
Ecris.addEventListener("keyup",function(){
    let resultat = Ecris.value;
    Lis.innerHTML = resultat;
    charcountupdate();

    let pourcentage = Lis.innerText.length
    document.getElementById("progressbar").style.width=pourcentage/2+"%";

if (pourcentage >=0 && pourcentage <= 99) 
{document.getElementById("progressbar").style.backgroundColor="green"; 
}

else if (pourcentage >=100 && pourcentage <= 149) {document.getElementById("progressbar").style.backgroundColor="yellow";
}
else if (pourcentage >=150 && pourcentage <= 200) {document.getElementById("progressbar").style.backgroundColor="red";
}
})


    
//Affichage du gif
Ecris.addEventListener('mouseenter',function(){
    Apparition.innerHTML = '<img src="loading.gif" alt="chargement" title="chargement" class="chargement2"></img>' ;
})

Ecris.addEventListener('mouseleave',function(){
    Apparition.innerHTML = '<img src="loading.gif" alt="chargement" title="chargement" class="chargement1"></img>' ;
})



let gras = document.querySelector("#boutonB")
gras.addEventListener("click",function(){
    Ecris.value = Ecris.value + "<b> </b>";
})


// let dmode = document.querySelector("#dmode")
// dmode.addEventListener("click",function(){
//     link.innerHTML = '<link rel="stylesheet" href="charte_dark_mode.css">';
// })

const interrupteur = document.getElementById("switch")
interrupteur.addEventListener("change",function(){
    if (document.querySelector("#switch").checked === true) {
        link.innerHTML = '<link rel="stylesheet" href="charte_dark_mode.css">';
    } else{
        link.innerHTML = '<link rel="stylesheet" href="charte ide online.css">';
    }
}
)

