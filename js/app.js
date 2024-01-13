//iniciando quantidades
let quantidades = [100,200,400];
let tipos = ['pista','superior','inferior'];

function comprar(){
    //recuperar valores de tipo e quantidade de ingresso
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeComprada = document.getElementById('qtd').value;
    let textoIngressos = quantidadeComprada > 1 ? 'ingressos' : 'ingresso';
    let textoCadeira = tipoDeIngresso == 'pista' ? ' ' : ' cadeira ';

    //zerar campo quantidade
    document.getElementById('qtd').value = '';

    // Verificar se a quantidade inserida é válida
     if (isNaN(quantidadeComprada) || quantidadeComprada <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //verificar disponibilidade, confirmar compra e reduzir quantidade disponível
    let compra;
    if(quantidades[tipos.indexOf(tipoDeIngresso)] < quantidadeComprada){
        alert(`Quantidade indisponível para${textoCadeira}${tipoDeIngresso}!`);
    } else {
        compra = confirm(`Deseja comprar ${quantidadeComprada} ${textoIngressos} para a${textoCadeira}${tipoDeIngresso}?`);
        if (compra){
            alert("Compra realizada com sucesso!");
            quantidades[tipos.indexOf(tipoDeIngresso)] -= quantidadeComprada;
            document.getElementById(`qtd-${tipoDeIngresso}`).innerText = quantidades[tipos.indexOf(tipoDeIngresso)];
        } else {
            return;
        }
    }
}