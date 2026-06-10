const btnCalcular = document.getElementById("btnCalcular");
const elementoResultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;

    if (isNaN(n1) || isNaN(n2)) {
        elementoResultado.textContent = "Por favor, digite os dois números.";
        return;
    }

    let resultadoFinal = 0;

    switch (operacao) {
        case "soma":
            resultadoFinal = n1 + n2;
            break;
        case "subtracao":
            resultadoFinal = n1 - n2;
            break;
        case "multiplicacao":
            resultadoFinal = n1 * n2;
            break;
        case "divisao":
            if (n2 === 0) {
                elementoResultado.textContent = "Erro: Divisão por zero!";
                return;
            }
            resultadoFinal = n1 / n2;
            break;
        default:
            resultadoFinal = "Operação inválida";
    }

    elementoResultado.textContent = `Resultado: ${resultadoFinal}`;
});