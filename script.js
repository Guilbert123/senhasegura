const senha = document.getElementById("password");

const mostrar = document.getElementById("mostrar");

const barra = document.getElementById("barraForca");

const textoForca = document.getElementById("textoForca");

const resultado = document.getElementById("resultado");


// MOSTRAR / ESCONDER SENHA

mostrar.addEventListener("click", function () {

    if (senha.type === "password") {

        senha.type = "text";
        mostrar.textContent = "🙈";

    } else {

        senha.type = "password";
        mostrar.textContent = "👁️";

    }

});


// ANALISAR SENHA

senha.addEventListener("input", function () {

    const valor = senha.value;

    const temTamanho = valor.length >= 12;

    const temMaiuscula = /[A-Z]/.test(valor);

    const temMinuscula = /[a-z]/.test(valor);

    const temNumero = /[0-9]/.test(valor);

    const temSimbolo = /[^A-Za-z0-9]/.test(valor);


    verificar("tamanho", temTamanho);
    verificar("maiuscula", temMaiuscula);
    verificar("minuscula", temMinuscula);
    verificar("numero", temNumero);
    verificar("simbolo", temSimbolo);


    let pontos = 0;

    if (temTamanho) pontos++;
    if (temMaiuscula) pontos++;
    if (temMinuscula) pontos++;
    if (temNumero) pontos++;
    if (temSimbolo) pontos++;


    atualizarForca(pontos);

});


function verificar(id, correto) {

    const elemento = document.getElementById(id);

    if (correto) {

        elemento.classList.add("ok");

        elemento.textContent =
            "✓ " + elemento.textContent.substring(2);

    } else {

        elemento.classList.remove("ok");

        elemento.textContent =
            "○ " + elemento.textContent.substring(2);

    }

}


function atualizarForca(pontos) {

    let porcentagem = pontos * 20;

    barra.style.width = porcentagem + "%";


    if (pontos <= 1) {

        barra.style.background = "#ef4444";

        textoForca.textContent = "Muito fraca";
        textoForca.style.color = "#ef4444";

        resultado.textContent =
            "Essa senha possui poucos critérios de segurança.";

    }

    else if (pontos === 2) {

        barra.style.background = "#f97316";

        textoForca.textContent = "Fraca";
        textoForca.style.color = "#f97316";

        resultado.textContent =
            "A senha pode ser melhorada.";

    }

    else if (pontos === 3) {

        barra.style.background = "#facc15";

        textoForca.textContent = "Moderada";
        textoForca.style.color = "#facc15";

        resultado.textContent =
            "A senha possui alguns critérios de segurança.";

    }

    else if (pontos === 4) {

        barra.style.background = "#22c55e";

        textoForca.textContent = "Forte";
        textoForca.style.color = "#22c55e";

        resultado.textContent =
            "A senha atende a maioria dos critérios.";

    }

    else {

        barra.style.background = "#22c55e";

        textoForca.textContent = "Muito forte";
        textoForca.style.color = "#22c55e";

        resultado.textContent =
            "A senha atende aos critérios analisados.";

    }

}


// CALCULADORA MATEMÁTICA

const caracteres =
    document.getElementById("caracteres");

const tamanhoSenha =
    document.getElementById("tamanhoSenha");

const calcular =
    document.getElementById("calcular");

const resultadoCalculo =
    document.getElementById("resultadoCalculo");


calcular.addEventListener("click", function () {

    const quantidade = Number(caracteres.value);

    const tamanho = Number(tamanhoSenha.value);


    if (quantidade <= 0 || tamanho <= 0) {

        resultadoCalculo.textContent =
            "Digite valores maiores que zero.";

        return;
    }


    const possibilidades =
        Math.pow(quantidade, tamanho);


    resultadoCalculo.textContent =
        "Possibilidades: " +
        possibilidades.toLocaleString("pt-BR");

});

