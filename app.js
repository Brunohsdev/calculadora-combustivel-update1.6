// Pega o form do HTML
const form = document.getElementById("form");
//cria um titulo para o 
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

// Adiciona o ouvinte de evento para o envio do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do form e o recarregamento da página

    const distanciaPercorrida = parseFloat(inputDistancia.value);
    const consumoMedio = parseFloat(inputConsumoMedio.value);

    if (distanciaPercorrida <= 0 || isNaN(distanciaPercorrida) || consumoMedio <= 0 || isNaN(consumoMedio)) {
        alert('=== ERROR ===\n=== Value is invalid ===');
    } else {
        alert("Dados válidos!\nVocê percorre " + distanciaPercorrida + " km com consumo de " + consumoMedio + " km/L.");
        // Aqui você pode fazer o cálculo do gasto, etc.
    }
})














































// Adiciona tudo no form
form.appendChild(p1);
form.appendChild(inputDistancia);
form.appendChild(p2);
form.appendChild(inputConsumoMedio);
form.appendChild(botao);