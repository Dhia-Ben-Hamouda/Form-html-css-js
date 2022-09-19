const btn1 = document.querySelector(".btn1");
const prec1 = document.querySelector(".prec1");
const suiv1 = document.querySelector(".suiv1");
const prec2 = document.querySelector(".prec2");
const terminer = document.querySelector(".terminer");
const ajouter = document.querySelector(".ajouter");
const ajouter3 = document.querySelector(".ajouter3");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const close = document.querySelector(".close");
const diplomes = [];
const experiences = [];

btn1.addEventListener("click" , (e)=>{
    document.querySelector("#form2").classList.remove("translated");
    document.querySelector("#form1").classList.add("translated");
    document.querySelector(".two").classList.add("active");
    header.innerHTML = "Formations";
})

prec1.addEventListener("click" , (e)=>{
    document.querySelector("#form1").classList.remove("translated");
    document.querySelector("#form2").classList.add("translated");
    document.querySelector(".two").classList.remove("active");
    header.innerHTML = "Identité";
})

suiv1.addEventListener("click" , (e)=>{
    document.querySelector("#form2").classList.add("translated");
    document.querySelector("#form3").classList.remove("translated");
    document.querySelector(".three").classList.add("active");
    header.innerHTML = "Expériences";
})

prec2.addEventListener("click" , (e)=>{
    document.querySelector("#form2").classList.remove("translated");
    document.querySelector("#form3").classList.add("translated");
    document.querySelector(".three").classList.remove("active");
    header.innerHTML = "Formations";
})

// values 

let val1 = "";
let val2 = "";
let val3 = "";
let val4 = "";

let val5 = "";
let val6 = "";
let val7 = "";
let val8 = "";

let val9 = "";
let val10 = "";
let val11 = "";
let val12 = "";

let valDiplome = "";

const initial = document.getElementById("initial");
const titre1 = document.getElementById("titre1");
const compTech = document.getElementById("comp_tech");
const compFonc = document.getElementById("comp_fonct");

const ecole = document.getElementById("ecole");
const diplome = document.getElementById("diplomee");
const annee = document.getElementById("annee");


const titre2 = document.getElementById("titre2");
const soc = document.getElementById("soc");
const dateDebut = document.getElementById("date_debut");
const dateFin = document.getElementById("date_fin");
const contexteProjet = document.getElementById("contexte");
const perimetreTech = document.getElementById("perimetre_tech");


diplome.addEventListener("keydown",(e)=>{
    valDiplome = e.target.value;
})

initial.addEventListener("keydown" , (e)=>{
    val1 = e.target.value;

    console.log(val1);
})

titre1.addEventListener("keydown" , (e)=>{
    val2 = e.target.value;

    console.log(val2);
})

compTech.addEventListener("keydown" , (e)=>{
    val3 = e.target.value;

    console.log(val3);
})

compFonc.addEventListener("keydown" , (e)=>{
    val4 = e.target.value;
})

ecole.addEventListener("keydown" , (e)=>{
    val5 = e.target.value;
})

annee.addEventListener("keydown" , (e)=>{
    val6 = e.target.value;
})

titre2.addEventListener("keydown" , (e)=>{
    val7 = e.target.value;

    console.log(e.target.value)
})

soc.addEventListener("keydown" , (e)=>{
    val8 = e.target.value;
})

dateDebut.addEventListener("keydown" , (e)=>{
    val9 = e.target.value;
})

dateFin.addEventListener("keydown" , (e)=>{
    val10 = e.target.value;
})

contexteProjet.addEventListener("keydown" , (e)=>{
    val11 = e.target.value;
})

perimetreTech.addEventListener("change" , (e)=>{
    val12 = e.target.value;
})

terminer.addEventListener("click" , async function(e){
    const params = {
        initial:val1,
        titre1:val2,
        compTech:val3,
        compFonc:val4,
        ecole:val5,
        annee:val6,
        titre2:titre2.value,
        soc:soc.value,
        dateDebut:val9,
        dateFin:val10,
        contexteProjet:contexteProjet.value,
        perimetreTech:val12,
        experiences,
        diplome:diplomes
    }

    params.annee = annee.value;
    params.initial = initial.value;
    params.titre1 = titre1.value;
    params.compTech = compTech.value;
    params.compFonc = compFonc.value;
    params.ecole = ecole.value;


    console.log(params)

    const response = await fetch("http://localhost:5000",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(params)
    })
    const data = await response.json();

    titre2.value = "";
    soc.value = "";
    dateDebut.value = "";
    dateFin.value = "";
    contexteProjet.value = "";
    perimetreTech.value = "";
})



ajouter.addEventListener("click" , (e)=>{
    diplomes.push(diplome.value);
    updateDiplomes();
})

function updateDiplomes(){
    wrapper.innerHTML = "";

    diplomes.forEach((item,index)=>{
        let span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = item;
        wrapper.append(span);
    })
}

const alert = document.querySelector(".alert");

ajouter3.addEventListener("click" , (e)=>{
    experiences.push({
        titre2:titre2.value,
        soc:soc.value,
        dateDebut:val9,
        dateFin:val10,
        contexteProjet:contexteProjet.value,
        perimetreTech:perimetreTech.value,
    });
    

    alert.classList.remove("hidden");

    console.log(experiences);
})



close.addEventListener("click" , (e)=>{
    alert.classList.add("hidden");
})
