function troca() {

    var val_destino = document.getElementById("val_destino").value;
    var val_origem = document.getElementById("val_origem").value;

    document.getElementById("val_origem").value = val_destino;
    document.getElementById("val_destino").value = val_origem;
}

function getCotacao() {
    var val_destino = document.getElementById("val_destino").value;
    var val_origem = document.getElementById("val_origem").value;

    var tipo = `${val_origem}${val_destino}`

    var url = `https://economia.awesomeapi.com.br/last/${val_origem}-${val_destino}`

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onerror = function (e) {
        document.getElementById('resultado').innerHTML = 'API IS OFFLine!'
    }

    request.onload = () => {
        var response = JSON.parse(request.responseText)

        if (response.erro) {
            document.getElementById('resultado').innerHTML = 'Não foi possível Converter';
        } else {
            var data = response[tipo];
            document.getElementById('resultado').innerHTML = `<p>Cotacao: ${data.bid}</p>`
        }
    }
    request.send();
}

function converter() {
    console.log('convertido')
}

//https://medium.com/@braulliovg/consumindo-api-de-consulta-de-endere%C3%A7o-via-javascript-c83b7ad9976e