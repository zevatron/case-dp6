// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


function eventoContato() {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
}

function eventoDownload() {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
}

function eventoAnaliseCard(rotulo) {
    ga('send', 'event', 'analise', 'ver_mais', rotulo);
}

function eventoSobre(acao) {
    if(acao != null){
        ga('send', 'event', 'contato', acao, 'preencheu');
    }
    else {
        ga('send', 'event', 'contato', 'enviado', 'enviado');
    }
}

function load() {
    
    var path = location.host.startsWith('localhost') ? '' : '/case-dp6';

    var contato = document.getElementsByClassName("menu-lista-contato");
    contato[0].addEventListener("click",eventoContato,false);

    var download = document.getElementsByClassName("menu-lista-download");
    download[0].addEventListener("click",eventoDownload,false);

    if(location.pathname == path +"/analise.html" ) {
        var cards = document.getElementsByClassName("card card-montadoras");
        for (const card of cards) {
            card.addEventListener("click",function(){eventoAnaliseCard(card.dataset.name)},false);       
        }
    }

    if(location.pathname == path + "/sobre.html" ) {
        var contato = document.getElementsByClassName("contato");
        inputs = contato[0].getElementsByTagName("input");
        for (const input of inputs) {
            input.addEventListener("change",function(){eventoSobre(acao = input.id)},false);
        }
    }





}

document.addEventListener("DOMContentLoaded", load, false);