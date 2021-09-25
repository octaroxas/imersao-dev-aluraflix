function troca(){

    var val_destino = document.getElementById("val_destino").value;
    var val_origem = document.getElementById("val_origem").value;

    document.getElementById("val_origem").value = val_destino;
    document.getElementById("val_destino").value = val_origem;
}

function converter() {
    console.log('convertido')
}

//https://medium.com/@braulliovg/consumindo-api-de-consulta-de-endere%C3%A7o-via-javascript-c83b7ad9976e