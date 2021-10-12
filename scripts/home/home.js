// Lsitagem de projetos
const projetos = [
    {
        imagem: "./images/projetos/5.png",
        titulo: "Imersão DEV_ Alura",
        descricao: "Projetos desenvolvidos durante a Imersão DEV_ da Alura.",
        link: "https://octacilio-dev.netlify.app"
    },
    {
        imagem: "./images/projetos/alura-quiz 1.png",
        titulo: "AluraFlix",
        descricao: "Projeto desenvolvido com Next.js na Imersão Alura.",
        link: "https://aluraquiz-octa-fdg68mufy.vercel.app"
    },
    {
        imagem: "./images/projetos/ajude-sua-ong 1.png",
        titulo: "Ajude Sua ONG",
        descricao: "Sua ONG (WEB - Desktop).",
        link: "https://www.figma.com/proto/69XniHqaVpXdwpFGd9ciUO/Plataforma-de-financiamento?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
    },
    {
        imagem: "./images/projetos/ajude-sua-ong 1.png",
        titulo: "Ajude Sua ONG",
        descricao: "Sua ONG (WEB - Mobile).",
        link: "https://www.figma.com/proto/pLtYeRKIjoyOmXJ87JGzax/platFinanci-(mobile)?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A172&show-proto-sidebar=1"
    },
    {
        imagem: "./images/projetos/devsuperior 1.png",
        titulo: "DS Vendas",
        descricao: "Projeto aluraflix da imarsão alura 1",
        link: "https://octa-spring-week-project.netlify.app"
    },

]
function listarProjetos() {
    projetos.map((item) => {
        var listaProjetos = document.getElementById('lista-projetos')

        var novoprojeto = `
            <a class="card-2-link" target="blank" href="${item.link}">
                <div class="card-2">
                    <img src="${item.imagem}" alt="">
                    <div class="card-2-descricao">
                        <h3 class="card-2-nome">${item.titulo}</h3>
                        <div class="texto-descricao">
                            ${item.descricao}
                        </div>
                    </div>
                </div>
            </a>
        `;

        console.log(novoprojeto)

        listaProjetos.innerHTML += novoprojeto;

    });
}

//Listagem de Tecnologias

var tecnologias = [
    {
        nome: "Javascript",
        imagem: "./images/tecnologias/logo-js 1.png"
    },
    {
        nome: "Typescript",
        imagem: "./images/tecnologias/logo-typescript 1.png"
    },
    {
        nome: "HTML5",
        imagem: "./images/tecnologias/html5.png"
    },
    {
        nome: "CSS3",
        imagem: "./images/tecnologias/css3.png"
    },    
    {
        nome: "PHP",
        imagem: "./images/tecnologias/php.png"
    },
    {
        nome: "Git",
        imagem: "./images/tecnologias/git.png"
    },
    {
        nome: "MySQL",
        imagem: "./images/tecnologias/mysql.png"
    }
]

function listarTecnologias() {
    var listatec = document.getElementById("tecnologias")

    tecnologias.map((tec) => {
        var novaTec = `
        <div class="tec-item">
            <img src="${tec.imagem}" alt="">
            <p class="tec-nome">${tec.nome}</p>
        </div>
    `
    listatec.innerHTML += novaTec
    })

}

// listar itens

function listarItens (){
    listarProjetos()
    listarTecnologias()
}




