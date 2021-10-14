function mudaTema() {

    var cardPerfil = document.getElementById('card-perfil')
    var projetos = document.getElementById('projetos');
    var corpo = document.getElementById('corpo')

    cardPerfil.classList.toggle('light')
    projetos.classList.toggle('light')
    corpo.classList.toggle('light')

    // if (cardPerfil.classList) {
    //     cardPerfil.classList.add("light");
    // }
    // else {
    //     elemento.className += " light";
    // }

    // for (var classe in cardPerfil.classList) {
    //     if (classe == 'light') {
    //         cardPerfil.classList.remove(classe);
    //     }
    //     else {
    //         cardPerfil.classList.add('light');
    //     }
    // }
}