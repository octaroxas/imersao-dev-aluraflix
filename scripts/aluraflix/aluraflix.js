
var listaFilmes = [
    {
        nome: "One Piece: Film Z",
        linkImg: "https://i.ytimg.com/vi/1gGt1Mg_zSo/maxresdefault.jpg",
        site: "https://animefire.net/animes/one-piece-film-z-todos-os-episodios"
    },
    {
        nome: "Ponyo",
        linkImg:
            "https://pixewall.com/wp-content/uploads/2021/06/ponyo-wallpaper-hd-9-755969jpg.jpg",
        site:
            "https://betteranime.net/filme/dublado/ponyo-uma-amizade-que-veio-do-mar"
    },
    {
        nome: "Nem que a vaca tussa!",
        linkImg:
            "https://is4-ssl.mzstatic.com/image/thumb/ZCLdD2etNJX0LbcSiD9XXg/1200x675.jpg",
        site: "https://topflix.vc/filmes/assistir-online-nem-que-a-vaca-tussa/"
    },
    {
        nome: "Castelo Animado",
        linkImg:
            "https://vitaminanerd.com.br/wp-content/uploads/2020/04/O-Castelo-Animado-Capa.png",
        site: "https://betteranime.net/filme/dublado/o-castelo-animado-dublado"
    }
];

// for (var i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + listaFilmes[i] + ">");
// }

function salvarFilme() {
    var nome = document.getElementById("nome").value;
    var imagem = document.getElementById("linkImagem").value;
    var site = document.getElementById("linkSite").value;

    listaFilmes.push({
        nome: nome,
        linkImg: imagem,
        site: site
    });

    console.log(listaFilmes);

    document.getElementById("filmes").innerHTML = `<p>
        <a target="_blank" href="${site}">
          <img src="${imagem}"/>                   
          <h5>${nome}</h5> 
        </a>       
      </p>`;
}

listaFilmes.map((imagem) => {
    document.write(
        `<p>
        <a target="_blank" href="${imagem.site}">
          <img src="${imagem.linkImg}"/>                   
          <h5>${imagem.nome}</h5> 
        </a>       
      </p>`
    );
});
