const projects = [{
    title: "Menu Responsivo",
    description: "Menu de restaurante feito com CSS grid",
    coverUrl: "https://images2.imgbox.com/e8/09/GttllhH4_o.jpg",
    demoLink: "https://daniela-ab.github.io/responsive-menu/",
    sourceLink: "https://github.com/daniela-ab/responsive-menu"
},
{
    title: "Aquário Municipal",
    description: "Projeto feito durante curso de Bootstrap 5",
    coverUrl: "https://images2.imgbox.com/c4/35/PzMuzhzu_o.jpg",
    demoLink: "https://daniela-ab.github.io/aquario-municipal/",
    sourceLink: "https://github.com/daniela-ab/aquario-municipal"
},
{
    title: "iPhone 13 PRO Clone",
    description: "Landing page usando HTML, CSS e Javascript",
    coverUrl: "https://images2.imgbox.com/34/f7/KvXDOuLp_o.jpg",
    demoLink: "https://daniela-ab.github.io/landing-page-iphone13/",
    sourceLink: "https://github.com/daniela-ab/landing-page-iphone13"
},
{
    title: "Landing page Starbucks",
    description: "Landing page feita com HTML, CSS e Javascript",
    coverUrl: "https://images2.imgbox.com/16/ce/DuYI3eVY_o.jpg",
    demoLink: "https://daniela-ab.github.io/starbucks/",
    sourceLink: "https://github.com/daniela-ab/starbucks"
},
{
    title: "Conversor de peso",
    description: "Conversor de peso estilizado com Bootstrap",
    coverUrl: "https://images2.imgbox.com/2b/87/v0vW4KPr_o.jpg",
    demoLink: "https://daniela-ab.github.io/conversor-peso/",
    sourceLink: "https://github.com/daniela-ab/conversor-peso"
},
{
    title: "Calculadora de Idade",
    description: "Calculadora em Python com 6 saídas de dados diferentes",
    coverUrl: "https://images2.imgbox.com/72/06/940uzWUe_o.jpg",
    demoLink: "https://replit.com/@dani0408/calculadoraidade?v=1",
    sourceLink: "https://github.com/daniela-ab/calculadora_idade"
},
{
    title: "Web App Clima",
    description: "Mostra temperatura de acordo com o local escolhido.",
    coverUrl: "https://images2.imgbox.com/3f/9a/DBYvoG6d_o.png",
    demoLink: "https://daniela-ab.github.io/app-temperatura/",
    sourceLink: "https://github.com/daniela-ab/app-temperatura"
},
{
    title: "Painel Administrativo",
    description: "Painel em Bootstrap",
    coverUrl: "https://images2.imgbox.com/29/97/3WlFquji_o.png",
    demoLink: "https://daniela-ab.github.io/dashboard-bootstrap/",
    sourceLink: "https://github.com/daniela-ab/dashboard-bootstrap"
},
];


function loadProjects() {
    const projectsList = document.querySelector("#projects .projects-list");

    let innerHTML = "";
    for (const { title, description, coverUrl, demoLink, sourceLink } of projects) {
        innerHTML += `
        <section class="project shadow move-y">
            <section class="image-container">
              <img loading="lazy" src="${coverUrl}" alt="">
            </section>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="links">
              <li><a href="${demoLink}" target="_blank">Demo</a></li>
              <li><a href="${sourceLink}" target="_blank">Repositório</a></li>
            </ul>
          </section >

        `
    }
    projectsList.innerHTML = innerHTML;


    // </section >
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
})