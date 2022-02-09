
//Partie 1

    /*exo 1*/
    let bFacile = document.getElementById("facile");


/*exo 2*/
bFacile.setAttribute("href","https://www.humanbooster.com ");

bFacile.setAttribute("target","_blank");


/*exo 3*/

bFacile.innerHTML = "Lien HB";

/*exo 4*/

bFacile.style.color = "purple";

/*-------------------------------------------------------*/
//Partie 2

/*exo A*/
let bChiffre = document.getElementById("chiffre");
let bSubmit = document.getElementById("multiple");


bSubmit.addEventListener("click", function(event) {
    //B
    event.preventDefault();

    //C
    let vChiffre = parseInt(bChiffre.value);

    //D
    function dp(nominateur,denominateur){
        return (nominateur%denominateur == 0);
    }
    const bResultat = document.getElementById("resultat");
    let resultat = "";  /*declarer la variable*/
    for(let i = 0; i <= 100; i++){
        resultat = resultat + "," + i;
        if (dp(i,4)){ /*i = nominateur  // 7 = denominateur*/
            resultat = resultat + "<b>"+ i +"</b>"; /*concaténer*/ /* les chiffres divise / 7 seront en Gras*/

        }else{
            resultat = resultat + "," + i;
        }
        bResultat.innerHTML = resultat;
    };


})

//JQUERY Partie 2


//3
class Voiture{

    constructor(vMarque, vModele, vCouleur){
        this._marque = vMarque;
        this._modele = vModele;
        this._couleur = vCouleur;

    }

    getVoiture = function(){

        return `${this._marque} ( ${this._modele} ) `;
        console.log("Marque : " + "Modele :" + 500);
    }
}

//4

//A

let bCreer = $("#creer");
let bMarque = $("#marque");
let bModele = $("#modele");
let bCouleur = $("#couleur");
let bAfficher = $("#afficher");
let tabVoiture = [];

bCreer.on("click", function(event){


    event.preventDefault();

//B
    vMarque = bMarque.val();
    vModele = bModele.val();
    vCouleur = bCouleur.val();


//C
    let newInstance = new Voiture(vMarque, vModele, vCouleur);

    //D
    tabVoiture.push(newInstance);
})

//5

//A

bAfficher.on("click", function(event){


    event.preventDefault();

    //B
    $("<div>")
    let voiture = $("<div>${tabVoiture[i].getVoiture()}</div>");
    div.css("background-color","red");
    $("body").appendChild($("div"))





})



