// Pega o form do HTML
const form = document.getElementById("form");
//cria um titulo
//Pega a div do HTML
const postosemedia =  document.getElementById("postosemedia");
//Pega a div do HTML
const resultado = document.getElementById("resultado");

//cria um titulo principal
const title = document.getElementById("titulo");
title.innerHTML = 'Digite as informações a seguir: ';

// Cria um input
const p1 = document.createElement("p");
p1.innerHTML = 'Qual é a distância percorrida da sua casa até o trabalho (em km)?';
const inputDistancia = document.createElement("input");
inputDistancia.type = "text";
inputDistancia.name = "distancia";
inputDistancia.placeholder = "Digite a distância percorrida";

// Cria outro input
const p2 = document.createElement("p");
p2.innerHTML = 'Qual é o consumo médio do veiculo(em Km/L)?';
const inputConsumoMedio = document.createElement("input");
inputConsumoMedio.type = "text";
inputConsumoMedio.name = "consumoMedio";
inputConsumoMedio.placeholder = "Digite o consumo médio do veiculo";

// Cria um botão de envio
const botao = document.createElement("button");
botao.type = "submit";
botao.textContent = "Enviar";

//cria variaveis globais para ser usada nas funções
let consumo_NecessarioLitros = 0;
let qtdPostos = 0;
let valorEncontradoNoPosto;
let valorTotal = 0;
let media = 0;
let menorValorPesquisado = 1000;
let gastoDiario = 0;
// Adiciona o ouvinte de evento para o envio do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do form e o recarregamento da página
    //Transforma os inputs em valores
    const distanciaPercorrida = parseFloat(inputDistancia.value);
    const consumoMedio = parseFloat(inputConsumoMedio.value);
    // Trata eles com um laço infinito
    while(true){
    if (distanciaPercorrida <= 0 || isNaN(distanciaPercorrida) || consumoMedio <= 0 || isNaN(consumoMedio)) {
        alert('=== ERROR ===\n=== Value is invalid ===');
        // limpa o input depois do alerta
        inputConsumoMedio.value = "";
        inputDistancia.value = "";
        return;
        
    } else {
        consumo_NecessarioLitros = distanciaPercorrida/ consumoMedio;
        alert(`Dados válidos!`);
        desativarFuncoes(p1,inputDistancia,p2,inputConsumoMedio,botao);
        qtdDePosto();
        break;  
    }
    }
})

function desativarFuncoes(a,b,c,d,e){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    }
function qtdDePosto(){
    //criação de elementos
    const p3 = document.createElement("p");
    p3.innerHTML = 'Em quantos postos você pesquisou ?';
    const inputqtdPostos = document.createElement("input");
    inputqtdPostos.type = "text";
    inputqtdPostos.name = "qtdpostos";
    inputqtdPostos.placeholder = "Digite a quantidade de postos";
    const botao1 = document.createElement("button");
    botao1.textContent = "Enviar";


    postosemedia.appendChild(p3);
    postosemedia.appendChild(inputqtdPostos);
    postosemedia.appendChild(botao1);

    botao1.addEventListener("click", function(){
        while(true){
    qtdPostos = parseInt(inputqtdPostos.value);
    if (qtdPostos <= 0 || isNaN(qtdPostos)){
        alert('===ERROR=== \n===Value is invalid===');
        inputqtdPostos.value = "";
        return;
    }  else{
            p3.style.display = "none";
            inputqtdPostos.style.display = "none";
            botao1.style.display = "none";
            mediaEGastosDiarios();
            break;
                      
}}
})}

function mediaEGastosDiarios(){
     //criação de elementos
     const p4 = document.createElement("p");
     p4.innerHTML = ` Digite o valor encontrado no posto`;
     const inputvalorEncontradoNoPosto = document.createElement("input");
     inputvalorEncontradoNoPosto.type = "text";
     inputvalorEncontradoNoPosto.name = "qtdpostos";
     inputvalorEncontradoNoPosto.placeholder = "Digite o valor encontrado no posto ";
     const botao2 = document.createElement("button");
     botao2.textContent = "Enviar";
 
 
     postosemedia.appendChild(p4);
     postosemedia.appendChild(inputvalorEncontradoNoPosto);
     postosemedia.appendChild(botao2);
 



    for(let i = 0; i != qtdPostos; i++){
        let mensagemDoPosto = `encontrado no posto ${i + 1}`;
        valorEncontradoNoPosto = parseFloat(prompt(`Digite o valor (em R$) ${mensagemDoPosto}`));
        if (valorEncontradoNoPosto <= 0 || isNaN(valorEncontradoNoPosto)){
            alert(`===ERROR=== \n===Value is invalid===\n===Digite novamente o valor ${mensagemDoPosto}===`);
            i -= 1;
        }else{
            valorTotal += valorEncontradoNoPosto;  
            
        if(valorEncontradoNoPosto < menorValorPesquisado){
            menorValorPesquisado = valorEncontradoNoPosto;
        }
    }
}
media = parseFloat(valorTotal)/qtdPostos;
gastoDiario = 2*(consumo_NecessarioLitros*menorValorPesquisado);
console.log(menorValorPesquisado);
console.log(valorTotal);
console.log(media);
p4.style.display = "none";
inputvalorEncontradoNoPosto.style.display = "none";
botao2.style.display = "none";
Exibirtela();
}



function Exibirtela(){
    const h2 = document.createElement("h2");
    h2.innerHTML = `Resultado`;
    const p5 = document.createElement("p");
    p5.innerHTML = `O consumo necessário é de ${consumo_NecessarioLitros.toFixed(2)}L`;
    const p6 = document.createElement("p");
    p6.innerHTML = `O menor valor foi de $R${menorValorPesquisado.toFixed(2)} reais`;
    const p7 = document.createElement("p");
    p7.innerHTML = `A média dos valores pesquisados é de $R${media.toFixed(2)} reais`;
    const p8 = document.createElement("p");
    p8.innerHTML = `O gasto diario (ida e volta) é de $R${gastoDiario.toFixed(2)} reais`;
    

    resultado.appendChild(h2);
    resultado.appendChild(p5);
    resultado.appendChild(p6);
    resultado.appendChild(p7);
    resultado.appendChild(p8);
  
}

// Adiciona tudo no form
form.appendChild(p1);
form.appendChild(inputDistancia);
form.appendChild(p2);
form.appendChild(inputConsumoMedio);
form.appendChild(botao);


