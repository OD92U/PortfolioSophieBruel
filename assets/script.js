const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

const responsefilters = await fetch("http://localhost:5678/api/categories");
const filters = await responsefilters.json();

function basebuttonStyle(id) {
    document.getElementById(id).style.color = "#1D6154";
    document.getElementById(id).style.fontSize = "16px";
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.borderColor = "#1D6154"
    document.getElementById(id).style.borderWidth = "1px";
    document.getElementById(id).style.borderRadius = "60px";
    document.getElementById(id).style.height = "37px";
    document.getElementById(id).style.minWidth = "100px";
    document.getElementById(id).style.fontFamily = "Syne";
    document.getElementById(id).style.fontWeight = "700";
    document.getElementById(id).style.paddingLeft = "10px";
    document.getElementById(id).style.paddingRight = "10px";
}

function selectedbuttonStyle(id) {
    document.getElementById(id).style.color = "white";
    document.getElementById(id).style.backgroundColor = "#1D6154";
}

function deselectedbuttonStyle(id) {
    document.getElementById(id).style.color = "#1D6154";
    document.getElementById(id).style.backgroundColor = "white";
}

function createFilter (s) {
        const nospace = s.replace(/\s+/g, '');
        const idname = "filter" + nospace;
        const createFilter = document.createElement("button");
        createFilter.classList.add("filterbutton");
        createFilter.id = idname;
        divFilters.appendChild(createFilter);
        document.getElementById(idname).innerHTML = s;
        basebuttonStyle(idname);
}

function addWork(s, n) {
    const article = s[n];
    const divGalery = document.querySelector(".gallery");
    const workElement = document.createElement("figure");
    const imageWork = document.createElement("img");
    imageWork.src = article.imageUrl;
    imageWork.alt = article.title;
    const workCaption = document.createElement("figcaption");
    workCaption.innerText = article.title;

    divGalery.appendChild(workElement);
    workElement.appendChild(imageWork);
    workElement.appendChild(workCaption);
}

const sectionPortfolio = document.querySelector("#portfolio");
const divFilters = document.createElement("div");
divFilters.id = "filters" ;
const gallery = document.querySelector(".gallery");
sectionPortfolio.insertBefore(divFilters, gallery);
document.getElementById("filters").style.marginBottom = "2.5em";
document.getElementById("filters").style.display = "flex";
document.getElementById("filters").style.justifyContent = "center";
document.getElementById("filters").style.gap = "10px";

createFilter("Tous");
selectedbuttonStyle("filterTous");

for (let i = 0; i < filters.length; i++) {
    createFilter(filters[i].name);
}

for (let i = 0; i < works.length; i++) {
    addWork(works, i);
}

const buttonTous = document.getElementById("filterTous");
const buttonObjets = document.getElementById("filterObjets");
const buttonAppartements = document.getElementById("filterAppartements");
const buttonHotelsRestaurants = document.getElementById("filterHotels&restaurants");

buttonObjets.addEventListener("click", function() {
    selectedbuttonStyle("filterObjets");
    deselectedbuttonStyle("filterTous");
    deselectedbuttonStyle("filterAppartements");
    deselectedbuttonStyle("filterHotels&restaurants");
    document.querySelector(".gallery").innerHTML = "";
    for (let i = 0; i < works.length; i++) {
        if (works[i].categoryId === 1) {
            addWork(works, i);
        }
    }
});

buttonAppartements.addEventListener("click", function() {
    selectedbuttonStyle("filterAppartements");
    deselectedbuttonStyle("filterTous");
    deselectedbuttonStyle("filterObjets");
    deselectedbuttonStyle("filterHotels&restaurants");
    document.querySelector(".gallery").innerHTML = "";
    for (let i = 0; i < works.length; i++) {
        if (works[i].categoryId === 2) {
            addWork(works, i);
        }
    }
});

buttonHotelsRestaurants.addEventListener("click", function() {
    selectedbuttonStyle("filterHotels&restaurants");
    deselectedbuttonStyle("filterTous");
    deselectedbuttonStyle("filterObjets");
    deselectedbuttonStyle("filterAppartements");
    document.querySelector(".gallery").innerHTML = "";
    for (let i = 0; i < works.length; i++) {
        if (works[i].categoryId === 3) {
            addWork(works, i);
        }
    }
});

buttonTous.addEventListener("click", function() {
    selectedbuttonStyle("filterTous");
    deselectedbuttonStyle("filterHotels&restaurants");
    deselectedbuttonStyle("filterObjets");
    deselectedbuttonStyle("filterAppartements");
    document.querySelector(".gallery").innerHTML = "";
    for (let i = 0; i < works.length; i++) {
        addWork(works, i);
    }
});







