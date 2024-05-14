const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

const responsefilters = await fetch("http://localhost:5678/api/categories");
const filters = await responsefilters.json();

const sectionPortfolio = document.querySelector("#portfolio");
const divFiltres = document.createElement("div");
divFiltres.id = "filtres" ;
const gallery = document.querySelector(".gallery");
sectionPortfolio.insertBefore(divFiltres, gallery);
console.log(filters);

for (let i = 0; i < works.length; i++) {
    const article = works[i];
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