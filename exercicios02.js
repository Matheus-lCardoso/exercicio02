//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Dados de Entrada
 */

const prompt = require('prompt-sync')();

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 01: Escreva um programa para calcular a redução do tempo de vida de um fumante.
 *  Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
 *  Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
 *  vida um fumante perderá e exiba o total em dias.
 */

console.log("Atividade 01: ");

let qntdFumadosDia = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
let qntdAnosFumando = Number(prompt("Digite a quantidade de anos que você está fumando: "));

let calculoFumante = (qntdFumadosDia * 10);
let calculoEmDias = Math.round((calculoFumante * qntdAnosFumando * 365) / (24 * 60));

console.log("A quantidade de dias de que o fumante perdeu foi de: " + calculoEmDias + " dias!");


//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercício 02: Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
 * 80 Km/h,exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor 
 * da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
 */

console.log("Atividade 02: ");

let velocidadeVeiculo = parseInt(prompt("Digite a velocidade do Veículo: "));

if (velocidadeVeiculo >= 80) {
    let calculoVelocidade01 = (velocidadeVeiculo - 80);
    let calculoVelocidade02 = calculoVelocidade01 * 5.00;
    console.log("Você foi multado! \nVocê passou a " + calculoVelocidade01 + " KM/H, acima da velocidade permitida!");
    console.log("O valor da multa foi de: " + calculoVelocidade02 + " reais.");
} else {
    console.log("Você passou na velocidade certa da via!")
}


//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercício 03: Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer 
 * em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
 * R$ 0.45 para viagens mais longas.
 */

console.log("Atividade 03: ");

let distanciaViagem = Number(prompt("Digite a distância que você quer percorrer(em KM): "));

if (distanciaViagem <= 200) {
    console.log("A distancia a ser percorrida vai ser de " + distanciaViagem + " Km.");
    console.log("O valor da passagem vai ser de: " + (distanciaViagem * 0.50) + " reais.");
} else if (distanciaViagem > 200) {
    console.log("A distancia a ser percorrida vai ser de " + distanciaViagem + " Km.");
    console.log("O valor da passagem vai ser de: " + (distanciaViagem * 0.45) + " reais.");
}


//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercício 04: Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
 * comprimentos e diga se é possível formar um triângulo com essas retas.
 * Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
 * lado deve ser menor que a soma dos outros dois.
*/

console.log("Atividade 04: ");

let ladoA = parseInt(prompt("Digite o comprimento de um lado: "));
let ladoB = parseInt(prompt("Digite o comprimento de um lado: "));
let ladoC = parseInt(prompt("Digite o comprimento de um lado: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("É possível formar um triângulo!")
} else {
    console.log("Não é possível formar um triângulo!")
}


//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercício 05: Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
 */

console.log("Atividade 05: ");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jokenpo() {
    const chances = ['pedra', 'papel', 'tesoura'];

    rl.question('Digite sua escolha (pedra, papel ou tesoura): ', (user) => {
        user = user.toLowerCase();

        if (!chances.includes(user)) {
            console.log('Escolha inválida! Por favor, escolha entre pedra, papel ou tesoura.');
            rl.close();
            return;
        }

        const computador = chances[Math.floor(Math.random() * 3)];
        let resultado = '';

        if (user === computador) {
            resultado = `Empate! Ambos escolheram ${user}.`;
        } else if (
            (user === 'pedra' && computador === 'tesoura') ||
            (user === 'papel' && computador === 'pedra') ||
            (user === 'tesoura' && computador === 'papel')
        ) {
            resultado = `Você ganhou! ${user} vence ${computador}.`;
        } else {
            resultado = `Você perdeu! ${computador} vence ${user}.`;
        }

        console.log(resultadoa);
        rl.close();
    });
}

jokenpo();


//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 06: Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
 * tentar descobrir qual foi o valor sorteado.
 */

console.log("Atividade 06: ");

const numeroCorreto = (Math.floor(Math.random() * 5));
console.log(numeroCorreto);
let tentativa;

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5: "))
    if (tentativa < numeroCorreto){
        console.log("Tente um número maior");
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor")    
    }    
} while (tentativa != numeroCorreto)

console.log("Parabens! Você acertou");


//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercício 07: Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
 * carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
 * cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
 * (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
 * mostre o preço a ser pago de acordo com os dados a seguir:
 * Carros populares
 * - Até 100 Km percorridos: R$ 0,20 por Km;
 * - Acima de 100 Km percorridos: R$ 0,10 por Km 
 * Carros de luxo:
 * - Até 200 Km percorridos: R$ 0,30 por Km;
 * - Acima de 200 Km percorridos: R$ 0,25 por Km;
 */

console.log("Atividade 07: ");

function calcularCustoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
    let custoPorDia;
    let custoPorKm;
    let custoTotal;

    if (tipoCarro === "popular") {
        custoPorDia = 90;
        if (kmPercorridos <= 100) {
            custoPorKm = 0.20;
        } else {
            custoPorKm = 0.10;
        }
    } else if (tipoCarro === "luxo") {
        custoPorDia = 150;
        if (kmPercorridos <= 200) {
            custoPorKm = 0.30;
        } else {
            custoPorKm = 0.25;
        }
    } else {
        console.log("Tipo de carro inválido!");
        return;
    }

    custoTotal = (custoPorDia * diasAluguel) + (custoPorKm * kmPercorridos);

    console.log("O custo total do aluguel é: R$ " + custoTotal.toFixed(2));
}

let tipoCarro = prompt("Digite o tipo de carro (popular ou luxo): ").toLowerCase();
let diasAluguel = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
let kmPercorridos = parseFloat(prompt("Digite a quantidade de Km percorridos: "));

calcularCustoAluguel(tipoCarro, diasAluguel, kmPercorridos);

calcularCustoAluguel();

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercício 08: Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
 * podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
 * sistema funciona assim:
 * - até 10 h de atividade no mês: ganha 2 pontos por hora
 * - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
 * - acima de 20 h de atividade no mês: ganha 10 pontos por hora
 * - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
 * Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
 * Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
 */

console.log("Atividade 08: ");

let hora = Number(prompt("Digite a quantidade de horas no mês que você fez de exerício: "));

if (hora <= 10) {
    let pontos01 = 2 * hora;
    let resul01 = (pontos01 * 0.05);
    console.log("Você ganhou " + pontos01 + " pontos!");
    console.log("Você ganhou R$ " + resul01);
} else if (hora >= 10 && hora <= 20) {
    let pontos02 = 5 * hora;
    let resul02 = pontos02 * 0.05;
    console.log("Você ganhou " + pontos02 + " pontos!");
    console.log("Você ganhou R$ " + resul02);
} else {
    let pontos03 = 10 * hora;
    let resul03 = pontos03 * 0.05;
    console.log("Você ganhou " + pontos03 + " pontos!");
    console.log("Você ganhou R$ " + resul03);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 09: Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
 * mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
 * perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
 * funcionário.
 */

console.log("Atividade 09: ");

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

let continuar = true;

while (continuar) {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    
    let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();
    
    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    } else {
        alert("Sexo inválido! Por favor, digite 'M' para masculino ou 'F' para feminino.");
        continue;
    }
    
    let resposta = prompt("Deseja continuar? (S para sim, N para não)").toUpperCase();
    if (resposta !== 'S') {
        continuar = false;
    }
}

console.log("Total de salários pagos aos homens: R$" + totalSalarioHomens.toFixed(2));
console.log("Total de salários pagos às mulheres: R$" + totalSalarioMulheres.toFixed(2));

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 10: Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
 * cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
 * a) O somatório entre todos os valores;
 * b) Qual foi o menor valor digitado;
 * c) A média entre todos os valores;
 * d) Quantos valores são pares.
 */

console.log("Atividade 10: ");

let soma = 0;
let menor = null;
let totalValores = 0;
let valoresPares = 0;
let continuar01;

do {
    let numero = parseFloat(prompt("Digite um número:"));

    soma += numero;

    if (menor === null || numero < menor) {
        menor = numero;
    }

    totalValores++;

    if (numero % 2 === 0) {
        valoresPares++;
    }

    continuar01 = prompt("Deseja continuar? (S para sim, N para não) ").toUpperCase();
} while (continuar01 === 'S');

let media = soma / totalValores;

console.log("Somatório de todos os valores: " + soma);
console.log("Menor valor digitado: " + menor);
console.log("Média entre todos os valores: " + media);
console.log("Quantidade de valores pares: " + valoresPares);

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 11: Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
 * Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
 * valores da sequência.
 */

console.log("Atividade 11: ");

let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA:"));

let razao = parseFloat(prompt("Digite a razão da PA:"));

let soma01 = 0;

let sequencia = "";

for (let i = 0; i < 10; i++) {
    let termoAtual = primeiroTermo + i * razao;
    soma01 += termoAtual;

    sequencia += termoAtual + (i < 9 ? ", " : "");
}

console.log("Os 10 primeiros termos da PA são: " + sequencia);

console.log("A soma dos 10 primeiros termos da PA é: " + soma01);

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 12: Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
 * Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
 */

console.log("Atividade 12: ");

let termo1 = 1;
let termo2 = 1;

let sequencia01 = termo1 + ", " + termo2;

for (let i = 3; i <= 10; i++) {
    let proximoTermo = termo1 + termo2;
    sequencia01 += ", " + proximoTermo;
    termo1 = termo2;
    termo2 = proximoTermo;
}

console.log("Os 10 primeiros termos da Sequência de Fibonacci são: " + sequencia01);

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Exercicio 13: Crie um programa que preencha automaticamente (usando lógica, não apenas
 * atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
 * da sequência de Fibonacci.
 */

console.log("Atividade 13: ");

let fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Os primeiros 15 termos da Sequência de Fibonacci são: " + fibonacci.join(", "));

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 14: Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
 * mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
 * que eles foram informados.
*/

console.log("Atividade 14: ");

let nomes01 = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt("Digite um nome:");
    nomes01.push(nome);
}

console.log("Nomes na ordem inversa:");
for (let i = nomes01.length - 1; i >= 0; i--) {
    console.log(nomes01[i]);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 15: Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
 * final, mostre quais são os números pares que foram digitados e em que posições eles
 * estão armazenados.
*/

console.log("Atividade 15: ");

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    numeros.push(numero);
}

console.log("Números pares e suas posições:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log("Número: " + numeros[i] + " - Posição: " + i);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 16: Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
 * (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
 * depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

console.log("Atividade 16: ");

let vetor01 = [];

for (let i = 0; i < 20; i++) {
    vetor01.push(Math.floor(Math.random() * 100));
}

console.log("Números gerados:", vetor01);

vetor01.sort((a, b) => a - b);
console.log("Números ordenados:", vetor01);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 17: Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
 * dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
 * os dados das pessoas menores de idade.
*/

console.log("Atividade 17: ");

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt("Digite o nome da pessoa:");
    let idade = parseInt(prompt("Digite a idade da pessoa:"));
    nomes.push(nome);
    idades.push(idade);
}

console.log("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log("Nome: " + nomes[i] + " - Idade: " + idades[i]);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 18: Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
 * um funcionário e ao final escreva o conteúdo do registro.
*/

console.log("Atividade 18: ");

let funcionario = {
    nome: prompt("Digite o nome do funcionário:"),
    cargo: prompt("Digite o cargo do funcionário:"),
    salario: parseFloat(prompt("Digite o salário do funcionário:"))
};

console.log("Funcionário:");
console.log("Nome:", funcionario.nome);
console.log("Cargo:", funcionario.cargo);
console.log("Salário:", funcionario.salario.toFixed(2));

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 19: Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
 * repetição. Escrever cada um deles no formato HH.MM.SS.
*/

console.log("Atividade 19: ");

let horarios = [];

for (let i = 0; i < 5; i++) {
    let valido = false;
    let horario;
    while (!valido) {
        horario = prompt("Digite um horário no formato HH.MM.SS:");
        let partes = horario.split(".");
        if (partes.length === 3 && 
            partes[0].length === 2 && 
            partes[1].length === 2 && 
            partes[2].length === 2 &&
            !isNaN(partes[0]) &&
            !isNaN(partes[1]) &&
            !isNaN(partes[2])) {
            let horas = parseInt(partes[0]);
            let minutos = parseInt(partes[1]);
            let segundos = parseInt(partes[2]);
            if (horas >= 0 && horas < 24 && minutos >= 0 && minutos < 60 && segundos >= 0 && segundos < 60) {
                valido = true;
                horarios.push(horario);
            }
        }
        if (!valido) {
            alert("Horário inválido! Tente novamente.");
        }
    }
}

console.log("Horários informados:");
for (let horario of horarios) {
    console.log(horario);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 20: Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
 * no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
 * salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
 * tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
 * Matrícula:
 * Nome:
 * Salário bruto:
 * Dedução INSS:
 * Salário líquido:
 * (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
 * INSS).
*/

console.log("Atividade 20: ");

let funcionarios = [];

for (let i = 0; i < 80; i++) {
    let matricula = prompt("Digite a matrícula do funcionário:");
    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário:"));
    let deducaoINSS = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - deducaoINSS;

    funcionarios.push({
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        deducaoINSS: deducaoINSS,
        salarioLiquido: salarioLiquido
    });
}

for (let funcionario of funcionarios) {
    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS:", funcionario.deducaoINSS.toFixed(2));
    console.log("Salário líquido:", funcionario.salarioLiquido.toFixed(2));
    console.log("------------------------");
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 21: Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
 * retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
 * = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

console.log("Atividade 21: ");

function pesoIdeal(altura, sexo) {
    if (sexo.toLowerCase() === 'masculino') {
        return 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        return 62.1 * altura - 44.7;
    } else {
        throw new Error("Sexo inválido! Use 'masculino' ou 'feminino'.");
    }
}

let altura = parseFloat(prompt("Digite a altura:"));
let sexo = prompt("Digite o sexo (masculino/feminino):");
try {
    let peso = pesoIdeal(altura, sexo);
    console.log("Peso ideal:", peso.toFixed(2));
} catch (e) {
    console.log(e.message);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 22: A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
 * dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
 * número não determinado de pessoas e retorne a média de salário da população, a
 * média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
 * 350,00.
*/

console.log("Atividade 22: ");

function coletarDados() {
    let totalSalarios = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let salariosAte350 = 0;
    let numPessoas = 0;

    while (true) {
        let salario = parseFloat(prompt("Digite o salário (ou um valor negativo para encerrar):"));
        if (salario < 0) break;
        let filhos = parseInt(prompt("Digite o número de filhos:"));

        totalSalarios += salario;
        totalFilhos += filhos;
        if (salario > maiorSalario) maiorSalario = salario;
        if (salario <= 350) salariosAte350++;
        numPessoas++;
    }

    if (numPessoas > 0) {
        let mediaSalarios = totalSalarios / numPessoas;
        let mediaFilhos = totalFilhos / numPessoas;
        let percentualAte350 = (salariosAte350 / numPessoas) * 100;

        console.log("Média de salário:", mediaSalarios.toFixed(2));
        console.log("Média de número de filhos:", mediaFilhos.toFixed(2));
        console.log("Maior salário:", maiorSalario.toFixed(2));
        console.log("Percentual de pessoas com salário até R$ 350,00:", percentualAte350.toFixed(2) + "%");
    } else {
        console.log("Nenhuma pessoa foi informada.");
    }
}

coletarDados();

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 23: Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
 * diagonal principal são iguais a 1 e os demais são nulos.
*/

console.log("Atividade 23: ");

let matrizIdentidade = [];

for (let i = 0; i < 7; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < 7; j++) {
        if (i === j) {
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

console.log("Matriz Identidade 7x7:");
for (let i = 0; i < 7; i++) {
    console.log(matrizIdentidade[i].join(" "));
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 24: Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
 * quantidade de elementos negativos da linha correspondente de M.
*/

console.log("Atividade 24: ");

let N = [
    [1, -1, 3, -4, 5, -6, 7, -8],
    [9, 10, -11, 12, -13, 14, -15, 16],
    [-17, 18, 19, -20, 21, 22, -23, 24],
    [25, -26, 27, 28, -29, 30, -31, 32],
    [-33, 34, 35, -36, 37, -38, 39, 40],
    [41, 42, -43, 44, -45, 46, -47, 48]
];

let C = [];

for (let i = 0; i < N.length; i++) {
    let countNegativos = 0;
    for (let j = 0; j < N[i].length; j++) {
        if (N[i][j] < 0) {
            countNegativos++;
        }
    }
    C.push(countNegativos);
}

console.log("Vetor C com quantidade de elementos negativos por linha:");
console.log(C);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 25: Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
 * de cada coluna separadamente.
*/

console.log("Atividade 25: ");

let matriz = [];

for (let i = 0; i < 15; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = parseFloat((Math.random() * 100).toFixed(2));
    }
}

console.log("Soma de cada coluna:");
for (let j = 0; j < 20; j++) {
    let somaColuna = 0;
    for (let i = 0; i < 15; i++) {
        somaColuna += matriz[i][j];
    }
    console.log("Coluna " + (j + 1) + ": " + somaColuna.toFixed(2));
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 26: Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
 * P[1..3,1..5].
*/

console.log("Atividade 26: ");

let Q = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let R = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

let P = [];

for (let i = 0; i < 3; i++) {
    P[i] = [];
    for (let j = 0; j < 5; j++) {
        P[i][j] = Q[i][j] * R[i][j];
    }
}

console.log("Matriz Produto P:");
for (let i = 0; i < 3; i++) {
    console.log(P[i].join(" "));
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 27: Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
 * multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
 * um vetor V(36). Escrever o vetor V no final.
*/

console.log("Atividade 27: ");

let S = [];
let T = parseFloat(prompt("Digite o valor de A:"));

for (let i = 0; i < 6; i++) {
    S[i] = [];
    for (let j = 0; j < 6; j++) {
        S[i][j] = parseFloat((Math.random() * 100).toFixed(2));
    }
}

let U = [];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        U.push(S[i][j] * S);
    }
}

console.log("Vetor V:");
console.log(U);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 28: Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
 * item:
 * a) a soma dos elementos acima da diagonal principal;
 * b) a soma dos elementos abaixo da diagonal principal;
*/

console.log("Atividade 28: ");

let D = [];

for (let i = 0; i < 10; i++) {
    D[i] = [];
    for (let j = 0; j < 10; j++) {
        D[i][j] = parseInt(Math.random() * 100);
    }
}

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j > i) {
            somaAcimaDiagonal += M[i][j];
        } else if (j < i) {
            somaAbaixoDiagonal += M[i][j];
        }
    }
}

console.log("Soma dos elementos acima da diagonal principal:", somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixoDiagonal);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 29: 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
 * a) da linha 4 de M;
 * b) da coluna 2 de M;
 * c) da diagonal principal;
 * d) todos os elementos da matriz M.
 * Escrever essas somas e a matriz.
*/

console.log("Atividade 29: ");

let E = [];

for (let i = 0; i < 5; i++) {
    E[i] = [];
    for (let j = 0; j < 5; j++) {
        E[i][j] = parseInt(Math.random() * 100);
    }
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTodosElementos = 0;

for (let i = 0; i < 5; i++) {
    somaLinha4 += E[3][i];
    somaColuna2 += E[i][1];
    somaDiagonalPrincipal += E[i][i];
    for (let j = 0; j < 5; j++) {
        somaTodosElementos += E[i][j];
    }
}

console.log("Soma da linha 4:", somaLinha4);
console.log("Soma da coluna 2:", somaColuna2);
console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("Soma de todos os elementos:", somaTodosElementos);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 30: Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
 * contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
 * e os vetores criados.
*/

console.log("Atividade 30: ");

let F = [];

for (let i = 0; i < 5; i++) {
    F[i] = [];
    for (let j = 0; j < 5; j++) {
        F[i][j] = parseInt(Math.random() * 100);
    }
}

let SL = [];
let SC = [];

for (let i = 0; i < 5; i++) {
    SL[i] = 0;
    SC[i] = 0;
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        SL[i] += F[i][j];
        SC[j] += F[i][j];
    }
}

console.log("Matriz M:");
for (let i = 0; i < 5; i++) {
    console.log(F[i].join(" "));
}

console.log("Vetor SL (soma das linhas):", SL);
console.log("Vetor SC (soma das colunas):", SC);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 31: Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
 * Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
 * todos os elementos de V diferentes de A. Mostre os resultados.
*/

console.log("Atividade 31: ");

let G = parseInt(prompt("Digite um número inteiro A:"));
let V = [];

for (let i = 0; i < 30; i++) {
    V[i] = [];
    for (let j = 0; j < 30; j++) {
        V[i][j] = Math.floor(Math.random() * 50);
    }
}

let countG = 0;
let X = [];

for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] === G) {
            countG++;
        } else {
            X.push(V[i][j]);
        }
    }
}

console.log("Quantidade de valores iguais a A:", countG);
console.log("Matriz X (valores diferentes de A):");
console.log(X);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 32: Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
 * cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
 * matriz lida e a modificada.
*/

console.log("Atividade 32: ");

let H = [];

for (let i = 0; i < 12; i++) {
    H[i] = [];
    for (let j = 0; j < 13; j++) {
        H[i][j] = parseFloat((Math.random() * 200 - 100).toFixed(2));
    }
}

let MModificada = [];

for (let i = 0; i < 12; i++) {
    let maiorModulo = 0;
    for (let j = 0; j < 13; j++) {
        if (Math.abs(H[i][j]) > Math.abs(maiorModulo)) {
            maiorModulo = H[i][j];
        }
    }
    MModificada[i] = [];
    for (let j = 0; j < 13; j++) {
        MModificada[i][j] = parseFloat((H[i][j] / maiorModulo).toFixed(2));
    }
}

console.log("Matriz M original:");
console.table(H);
console.log("Matriz M modificada:");
console.table(MModificada);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 33: Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
 * elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

console.log("Atividade 33: ");

let K = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somaDiagonalSecundaria = 0;
for (let i = 0; i < 3; i++) {
    somaDiagonalSecundaria += K[i][2 - i];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;

for (let i = 0; i < 3; i++) {
    K[i][i] *= mediaDiagonalSecundaria;
}

console.log("Matriz modificada:");
console.table(K);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 34: Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
 * cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
 * multiplicações.
*/

console.log("Atividade 34: ");

let M = [];

for (let i = 0; i < 50; i++) {
    M[i] = [];
    for (let j = 0; j < 50; j++) {
        M[i][j] = parseFloat((Math.random() * 100).toFixed(2));
    }
}

for (let i = 0; i < 50; i++) {
    let fator = M[i][i];
    for (let j = 0; j < 50; j++) {
        M[i][j] *= fator;
    }
}

console.log("Matriz após as multiplicações:");
console.table(M);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 35: Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
 * conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
 * estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
 * vetor pode ser preenchido quantas vezes forem necessárias.
*/

console.log("Atividade 35: ");

let valores = [];
for (let i = 0; i < 30; i++) {
    valores.push(Math.floor(Math.random() * 100));
}

let pares = [];
let impares = [];

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 0) {
        pares.push(valores[i]);
        if (pares.length === 5) {
            console.log("Vetor de pares cheio:", pares);
            pares = [];
        }
    } else {
        impares.push(valores[i]);
        if (impares.length === 5) {
            console.log("Vetor de ímpares cheio:", impares);
            impares = [];
        }
    }
}

if (pares.length > 0) {
    console.log("Vetor de pares restantes:", pares);
}
if (impares.length > 0) {
    console.log("Vetor de ímpares restantes:", impares);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 36: Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
 * um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
 * do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
 * número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
 * o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
 * mensagem "Parabéns, tu foi o GANHADOR".
*/

console.log("Atividade 36: ");

let gabarito01 = [];
for (let i = 0; i < 13; i++) {
    gabarito01.push(parseInt(prompt(`Digite o gabarito da questão ${i + 1}:`)));
}

for (let i = 0; i < 100; i++) {
    let numeroCartao = parseInt(prompt(`Digite o número do cartão do apostador ${i + 1}:`));
    let respostas = [];
    for (let j = 0; j < 13; j++) {
        respostas.push(parseInt(prompt(`Digite a resposta da questão ${j + 1} para o apostador ${i + 1}:`)));
    }

    let acertos = 0;
    for (let j = 0; j < 13; j++) {
        if (respostas[j] === gabarito01[j]) {
            acertos++;
        }
    }

    console.log(`Apostador ${numeroCartao} teve ${acertos} acertos.`);
    if (acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 37: Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
 * o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
 * respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
 * aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
 * e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

console.log("Atividade 37: ");

let gabarito = [];
for (let i = 0; i < 20; i++) {
    gabarito.push(prompt(`Digite o gabarito da questão ${i + 1}:`));
}

for (let i = 0; i < 50; i++) {
    let respostas = [];
    for (let j = 0; j < 20; j++) {
        respostas.push(prompt(`Digite a resposta da questão ${j + 1} para o aluno ${i + 1}:`));
    }

    let acertos = 0;
    for (let j = 0; j < 20; j++) {
        if (respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Aluno ${i + 1} teve ${acertos} acertos.`);
    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 38: Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
 * variável identificadora que calcule a operação conforme a informação contida nesta
 * variável:
 * 1- soma dos elementos;
 * 2- produto dos elementos;
 * 3- média dos elementos;
 * 4- ordene os elementos em ordem crescente;
 * 5- mostre o vetor.
*/

console.log("Atividade 38: ");

let vetor = [];
for (let i = 0; i < 6; i++) {
    vetor.push(parseFloat(prompt(`Digite o valor do elemento ${i + 1}:`)));
}

let identificador = parseInt(prompt("Digite a operação (1: soma, 2: produto, 3: média, 4: ordenar, 5: mostrar):"));

switch (identificador) {
    case 1:
        let soma = vetor.reduce((acc, val) => acc + val, 0);
        console.log("Soma dos elementos:", soma);
        break;
    case 2:
        let produto = vetor.reduce((acc, val) => acc * val, 1);
        console.log("Produto dos elementos:", produto);
        break;
    case 3:
        let media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
        console.log("Média dos elementos:", media);
        break;
    case 4:
        vetor.sort((a, b) => a - b);
        console.log("Elementos ordenados:", vetor);
        break;
    case 5:
        console.log("Elementos do vetor:", vetor);
        break;
    default:
        console.log("Operação inválida.");
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 39: Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
 * vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

console.log("Atividade 39: ");

let A = [];
for (let i = 0; i < 100; i++) {
    A.push(parseInt(prompt(`Digite o valor do elemento ${i + 1}:`)));
}

let B = A.filter(valor => valor > 0);

console.log("Vetor B (compactado):", B);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 40: Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
 * resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
 * cada), representando as apostas feitas. Compare os números das apostas com o
 * resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
 * corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
 * e quadras, apenas por quinas.)
*/

console.log("Atividade 40: ");

let resultadoOficial = [];
for (let i = 0; i < 5; i++) {
    resultadoOficial.push(parseInt(prompt(`Digite o número ${i + 1} do resultado oficial:`)));
}

for (let i = 0; i < 50; i++) {
    let aposta = [];
    for (let j = 0; j < 5; j++) {
        aposta.push(parseInt(prompt(`Digite o número ${j + 1} da aposta ${i + 1}:`)));
    }

    let ganhador = aposta.every((num, index) => num === resultadoOficial[index]);

    if (ganhador) {
        console.log(`Aposta ${i + 1} é Ganhador!`);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 41: Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
 * idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
 * nome e idade.
*/

console.log("Atividade 41: ");

let pessoa = {
    nome: prompt("Digite o nome da pessoa:"),
    idade: parseInt(prompt("Digite a idade da pessoa:"))
};

console.log("Idade:", pessoa.idade);

pessoa.email = prompt("Digite o email da pessoa:");

console.log("Objeto pessoa atualizado:", pessoa);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 42: Crie um objeto chamado dados que contém várias propriedades, incluindo números,
 * strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
 * propriedades que são arrays.
*/

console.log("Atividade 42: ");

let dados = {
    nome: "Ana",
    idade: 25,
    hobbies: ["ler", "caminhar"],
    notas: [10, 9, 8],
    endereco: {
        rua: "Av. Principal",
        numero: 100
    }
};

function filtrarArrays(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

let arraysSomente = filtrarArrays(dados);
console.log("Propriedades que são arrays:", arraysSomente);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 43: Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
 * combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
 * sobre as do obj1 em caso de conflitos.
*/

console.log("Atividade 43: ");

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let combinado = combinarObjetos(obj1, obj2);
console.log("Objeto combinado:", combinado);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 44: Escreva uma função que conte quantas propriedades do tipo string existem em um
 * objeto e retorne esse número.
*/

console.log("Atividade 44: ");

function contarStrings(obj) {
    let count = 0;
    for (let chave in obj) {
        if (typeof obj[chave] === "string") {
            count++;
        }
    }
    return count;
}

let objeto = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo",
    email: "carlos@exemplo.com"
};

console.log("Número de propriedades do tipo string:", contarStrings(objeto));

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 45: Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
 * o número de vezes que a string aparece no array.
*/

console.log("Atividade 45: ");

function contarOcorrencias(array) {
    let contador = {};
    array.forEach(str => {
        if (contador[str]) {
            contador[str]++;
        } else {
            contador[str] = 1;
        }
    });
    return contador;
}

let arrayStrings = ["apple", "banana", "apple", "orange", "banana", "apple"];
let ocorrencias = contarOcorrencias(arrayStrings);
console.log("Ocorrências de cada string:", ocorrencias);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 46: Suponha que você tem um array de objetos onde cada objeto representa uma venda
 * com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
 * de vendas por vendedor.
*/

console.log("Atividade 46: ");

function totalVendasPorVendedor(vendas) {
    let resumo = {};
    vendas.forEach(venda => {
        if (resumo[venda.vendedor]) {
            resumo[venda.vendedor] += venda.valor;
        } else {
            resumo[venda.vendedor] = venda.valor;
        }
    });
    return resumo;
}

let vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "João", valor: 200 },
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Pedro", valor: 250 }
];

let resumoVendas = totalVendasPorVendedor(vendas);
console.log("Total de vendas por vendedor:", resumoVendas);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 47: Crie uma função que transforme um objeto de entrada aplicando uma função
 * fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
 * resultados.
*/

console.log("Atividade 47: ");

function transformarObjeto(obj, func) {
    let novoObjeto = {};
    for (let chave in obj) {
        novoObjeto[chave] = func(obj[chave]);
    }
    return novoObjeto;
}

let objeto01 = {
    a: 1,
    b: 2,
    c: 3
};

function dobrar(x) {
    return x * 2;
}

let objetoTransformado = transformarObjeto(objeto01, dobrar);
console.log("Objeto transformado:", objetoTransformado);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 48: Você recebe dois objetos que representam o inventário de duas lojas diferentes:
 * inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
 * item em estoque. Escreva uma função que combine os inventários em um único objeto.
 * Se um item aparecer em ambas as lojas, some as quantidades.
*/

console.log("Atividade 48: ");

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = { ...inventarioLojaA };
    for (let item in inventarioLojaB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioLojaB[item];
        } else {
            inventarioCombinado[item] = inventarioLojaB[item];
        }
    }
    return inventarioCombinado;
}

let inventarioLojaA = {
    "item1": 10,
    "item2": 5,
    "item3": 8
};

let inventarioLojaB = {
    "item2": 7,
    "item3": 4,
    "item4": 12
};

let inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventarioFinal);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 49: Você recebe um array de objetos representando transações financeiras. Cada
 * transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
 * onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
 * essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

console.log("Atividade 49: ");

function agruparTransacoesPorCategoria(transacoes) {
    let resultado = {};
    transacoes.forEach(transacao => {
        if (!resultado[transacao.categoria]) {
            resultado[transacao.categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }
        resultado[transacao.categoria].transacoes.push(transacao);
        resultado[transacao.categoria].subtotal += transacao.valor;
    });
    return resultado;
}

let transacoes = [
    { id: 1, valor: 100, data: "2024-05-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2024-05-02", categoria: "Transporte" },
    { id: 3, valor: 50, data: "2024-05-03", categoria: "Alimentação" },
    { id: 4, valor: 300, data: "2024-05-04", categoria: "Lazer" }
];

let transacoesPorCategoria = agruparTransacoesPorCategoria(transacoes);
console.log("Transações agrupadas por categoria:", transacoesPorCategoria);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Exercicio 50: 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
 * deverá ser capaz de interagir com o usuário através do console do navegador e manter
 * um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
 * informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
 * 
 * 1. Estrutura de Dados:
 * ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
 * cidade, quartos totais e quartos disponiveis.
 * ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
 * nomeCliente.
 * 
 * 2. Funcionalidades:
 * ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
 * ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
 * disponíveis em uma cidade específica.
 * ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
 * deve diminuir o número de quartos disponiveis do hotel.
 * ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
 * aumentar o número de quartos disponiveis no hotel correspondente.
 * ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
 * cliente.
 * 
 * 3. Regras de Negócio:
 * ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
 * ○ As reservas devem ser identificadas por um ID único e associadas a um
 * único hotel.
 * 
 * 4. Desafios Adicionais (Opcionais):
 * ○ Implementar uma função de check-in e check-out que atualize a
 * disponibilidade de quartos.
 * ○ Gerar relatórios de ocupação para um hotel.
 * ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
 * avaliações dentro do objeto do hotel.
*/

console.log("Atividade 50: ");