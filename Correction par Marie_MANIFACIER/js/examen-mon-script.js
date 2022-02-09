//JAVASCRIPT 1

//A
let bExo1 = document.getElementById("exo1");

//B
bExo1.setAttribute("title","Premier exercice facile ");

//C
bExo1.innerHTML = "Yes ! Premier exercice done !!! ";

//D
bExo1.style.backgroundColor = "black";
bExo1.style.color = "white";
bExo1.style.padding = "10px";

//E
let bBody = document.body;
let bNewDiv = document.createElement(`div`);
bNewDiv.setAttribute("id","exo1e")
bNewDiv.innerHTML = "Coucou";
bBody.append(bNewDiv);



//JAVASCRIPT 2

//A
let bChiffre = document.getElementById("chiffre");
let bSubmit = document.getElementById("table");
let bPara = document.getElementById("p_multiplication");

//B
bSubmit.addEventListener("click", function(event) {
    //C
    event.preventDefault();
    
    //D
    let vChiffre = parseInt(bChiffre.value);

    //E
    let reponse = ""
    for (let i = 0; i <= 10; i++) {
        reponse += `${vChiffre} x ${i} = ${vChiffre*i} <br>`;
    }
    bPara.innerHTML = reponse;
})



//JQUERY 5

class Animal{
    constructor(vNom, vSurnom, vAge, vSexe){
        this._nom = vNom;
        this._surnom = vSurnom;
        this._age = vAge;
        this._sexe = vSexe;
    }

    getFullName = function(){
        return `${this._nom} ( ${this._surnom} )`;
    }
}



//JQUERY 6

let bNom = $("#nom");
let bSurnom = $("#surnom");
let bAge = $("#age");
let bSexe = $("#sexe");
let bCreer = $("#creer");
let bAfficher = $("#afficher");
let bTbody = $("#tbody");
let tabAnimaux = [];

//A
bCreer.on("click", function(event){
    event.preventDefault();

    //B
    vNom = bNom.val();
    vSurnom = bSurnom.val();
    vAge = bAge.val();
    vSexe = bSexe.val();

    //C
    let newInstance = new Animal(vNom, vSurnom, vAge, vSexe);

    //D
    tabAnimaux.push(newInstance);
})



//JQUERY 7

//A
bAfficher.on("click", function(event) {
    event.preventDefault();

    //B
    let lignes = ""
    for (let i = 0; i < tabAnimaux.length; i++) {
        lignes += `<tr><td>${tabAnimaux[i].getFullName()}</td><td class="suppr">X</td></tr>`;
    }
    bTbody.html(lignes);
    
    let bSuppr = $(".suppr");

    bSuppr.on("click", function() {
        let supprActu = $(this);
        bParent = supprActu.closest("tr");
        bParent.remove();
    })
})