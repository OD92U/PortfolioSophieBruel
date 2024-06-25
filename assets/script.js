let reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

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

const buttonUserIn = document.getElementById("buttonin");
const buttonUserOut = document.getElementById("buttonout");
buttonUserIn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/login.html"
})
buttonUserOut.addEventListener("click", (event) => {
    sessionStorage.clear();
    buttonUserIn.style.display = null;
    buttonUserOut.style.display = "none";
    location.reload();
})

const userin = window.sessionStorage.getItem("usertoken");
if (userin != null) {
    const barremodif = document.createElement("div");
    const header = document.querySelector("header");
    barremodif.id = "barremodif";
    barremodif.style.backgroundColor = "#000000";
    barremodif.style.height = "59px";
    barremodif.style.width = "100%";
    barremodif.style.justifyContent = "center";
    barremodif.style.display = "flex";
    barremodif.style.alignItems ="center";
    document.body.insertBefore(barremodif, header);

    const buttonmodif1 = document.createElement("button");
    buttonmodif1.classList.add("buttonmodif");
    buttonmodif1.id = "buttonmodif1";
    buttonmodif1.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i> Mode édition";
    buttonmodif1.style.color = "white";
    buttonmodif1.style.border = "none";
    buttonmodif1.style.backgroundColor = "#000000";
    buttonmodif1.style.fontFamily = "Work Sans";
    buttonmodif1.style.fontSize = "16px";
    buttonmodif1.style.fontWeight = "400";
    buttonmodif1.style.justifyContent = "center";
    buttonmodif1.style.display = "flex";
    buttonmodif1.style.gap = "10px";
    document.getElementById("barremodif").appendChild(buttonmodif1);

    const mesprojets = document.createElement("div");
    mesprojets.id = "mesprojets";
    mesprojets.style.display = "flex";
    mesprojets.style.flexDirection ="row";
    mesprojets.style.justifyContent = "center";
    mesprojets.style.gap ="20px";
    document.getElementById("portfolio").insertBefore(mesprojets, document.getElementById("filters"));
    mesprojets.appendChild(document.querySelector("section#portfolio h2"));

    const buttonmodif2 = document.createElement("button");
    buttonmodif2.classList.add("buttonmodif");
    buttonmodif2.id = "buttonmodif2";
    buttonmodif2.innerHTML = "<i class=\"fa-regular fa-pen-to-square\"></i> modifier";
    buttonmodif2.style.border = "none";
    buttonmodif2.style.backgroundColor = "white";
    buttonmodif2.style.fontFamily = "Work Sans";
    buttonmodif2.style.fontSize = "14px";
    buttonmodif2.style.fontWeight = "400";
    buttonmodif2.style.justifyContent = "center";
    buttonmodif2.style.display = "flex";
    buttonmodif2.style.gap = "10px";
    buttonmodif2.style.height = "25px";
    buttonmodif2.style.alignItems = "flex-end";
    mesprojets.appendChild(buttonmodif2);

    divFilters.style.display = "none";
    buttonUserIn.style.display = "none";
    buttonUserOut.style.display = null;


}

let modal = null;

const openModal = function (e) {
    e.preventDefault();
    document.getElementById("galleryphotos").innerHTML = "";
    document.querySelector(".modalEdit").style.display = null;
    const target = document.getElementById("editgallery");
    target.style.display = null ;
    target.removeAttribute("aria-hidden");
    for (let i = 0; i < works.length; i++) {
        const article = works[i];
        const divGalery = document.getElementById("galleryphotos");
        const divWorks = document.createElement("div");
        divWorks.classList.add("divWorks");
        divWorks.id = "divWorks" + article.id
        divWorks.style.backgroundImage = "url(" + article.imageUrl +")";
        const removeWorksbutton = document.createElement("button");
        const tempid = article.id;
        removeWorksbutton.classList.add("removeWorksbutton");
        removeWorksbutton.id = tempid;
        removeWorksbutton.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>";

        divGalery.appendChild(divWorks);
        divWorks.appendChild(removeWorksbutton);
        document.getElementById(article.id).addEventListener("click", removeWorks.bind(this, article.id));

    }

    document.getElementById("addphoto").addEventListener("click", openModalAdd);

    modal = target;
    modal.addEventListener("click", closeModal);
    modal.querySelector(".modalEdit").addEventListener("click", noPropagation);
    modal.querySelector(".modalAdd").addEventListener("click", noPropagation);
    
}

const openModalAdd = function (e) {
    document.querySelector(".modalEdit").style.display = "none";
    document.querySelector(".modalAdd").style.display = null;
    resetModalAdd();
    const selectCategory = document.querySelector(".selectCategory")
    selectCategory.innerHTML = "";
    for (let i = 0; i < filters.length; i++) {
        const createOption = document.createElement("option");
        createOption.value = filters[i].id;
        createOption.innerHTML = filters[i].name;
        selectCategory.appendChild(createOption);   
    }
    selectCategory.innerHTML += "<option disabled selected value=\"\"></option>";
}

const previous = function (e) {
    document.querySelector(".modalEdit").style.display = null;
    document.querySelector(".modalAdd").style.display = "none";
}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault();
    document.querySelector(".modalEdit").style.display = "none";
    document.querySelector(".modalAdd").style.display = "none";
    modal.style.display = "none" ;
    modal.setAttribute("aria-hidden", true);
    modal.removeEventListener("click", closeModal);
    modal.querySelector(".modalEdit").removeEventListener("click", noPropagation);
    modal.querySelector(".modalAdd").removeEventListener("click", noPropagation);
    document.getElementById("addphoto").removeEventListener("click", openModalAdd);
    modal = null;
}

const noPropagation = function (e) {
    e.stopPropagation();
}

const removeWorks = function (id) {
    const header = { 'Authorization': 'Bearer ' + sessionStorage.getItem("usertoken")};
    fetch('http://localhost:5678/api/works/'+id+'', {
       method: "DELETE",
       headers: header,
       body: null
    })
    const tempid = "divWorks" + id;
    document.getElementById(tempid).remove();
    document.querySelector(".gallery").innerHTML = "";
    works = works.filter(work => !(work.id == id));
    for (let i = 0; i < works.length; i++) {
               addWork(works, i);
            }  
}

const chooseFile = document.getElementById("getFile");

chooseFile.addEventListener("change", function () {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      document.getElementById("imgPreview").style.display = null;
      document.getElementById("imgPreview").innerHTML = '<img src="' + this.result + '" />';
      document.getElementById("selectPhotoIcon").style.display = "none";
      document.getElementById("selectPhoto").style.display = "none";
      document.querySelector(".labelgetFile").style.display = "none";
    });    
  }
}

const resetModalAdd = function () {
    document.getElementById("imgPreview").style.display = "none";
    document.getElementById("selectPhotoIcon").style.display = null;
    document.getElementById("selectPhoto").style.display = null;
    document.querySelector(".labelgetFile").style.display = null;
}

document.querySelector(".previousModal").addEventListener("click", previous);

document.querySelectorAll(".closemodal").forEach(b => {
    b.addEventListener("click", closeModal);
})

document.querySelectorAll(".buttonmodif").forEach(b => {
    b.addEventListener("click", openModal);
})

function checkFilled () {
    const inputfilecheck = document.getElementById("getFile");
    const inputtitlecheck = document.getElementById("titleAddWork").value;
    const inputcategorycheck = document.getElementById("categoryAddwork").value;
    if (inputfilecheck.files.length != 0) {
        if (inputtitlecheck != ""){
            if (inputcategorycheck != "") {
                return true;
            }
        }
    }
    else {
        return false;
    }
};

const submitNewWork = document.getElementById("addNewWork");
submitNewWork.addEventListener("submit", (event) => {
    event.preventDefault();
    if (checkFilled()) {
    const header = { 'Authorization': 'Bearer ' + sessionStorage.getItem("usertoken")};
    const formData = new FormData(submitNewWork);
    fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: header,
        body: formData
    })
    .then(response => response.json())
    .then(response => {

        const article = response ;
        works.push(article);
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
    });
    closeModal(event);
    document.getElementById("validate").style.backgroundColor = "#A7A7A7";
    document.getElementById("getFile").value = null;
    document.getElementById("titleAddWork").value = null;
    } 
});

function changeValidateColor () {
    if (checkFilled() == true) {
        document.getElementById("validate").style.backgroundColor = "#1D6154";
    }
    else {
        document.getElementById("validate").style.backgroundColor = "#A7A7A7";
    }
}

const photoselection = document.getElementById("selectPhoto");
photoselection.addEventListener("click", clickphoto, false);

function clickphoto () {
    document.getElementById("getFile").click();
}

const titleCheck = document.getElementById("titleAddWork");
titleCheck.addEventListener("change", changeValidateColor);
const imgCheck = document.getElementById("getFile");
imgCheck.addEventListener("change", changeValidateColor);
const ctgCheck = document.getElementById("categoryAddwork");
ctgCheck.addEventListener("change", changeValidateColor);




