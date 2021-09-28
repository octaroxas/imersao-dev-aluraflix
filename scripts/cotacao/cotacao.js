let cot_data;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function troca() {

    var val_destino = document.getElementById("val_destino").value;
    var val_origem = document.getElementById("val_origem").value;

    document.getElementById("val_origem").value = val_destino;
    document.getElementById("val_destino").value = val_origem;
}

function getCotacoes() {
    var url = 'https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,EUR-BRL,BTC-BRL,BRL-EUR,BRL-USD,EUR-USD,BTC-USD,BTC-EUR';

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
            cot_data = response;
        }
    }
    request.send();
}

function converter() {
    var val_destino = document.getElementById("val_destino").value;
    var val_origem = document.getElementById("val_origem").value;

    var tipo = `${val_origem}${val_destino}`
    var valor = document.getElementById("valor").value;

    console.log(cot_data);
    data = cot_data[tipo];
    document.getElementById('resultado').innerHTML = `<p>Resultado da conversão: ${(data.bid * valor).toFixed(2)}</p>`
}

//https://medium.com/@braulliovg/consumindo-api-de-consulta-de-endere%C3%A7o-via-javascript-c83b7ad9976e