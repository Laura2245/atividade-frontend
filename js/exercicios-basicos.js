// 1. Variáveis e tipos
let minhaString = "Olá, mundo!";
const meuNumero = 42;

console.log(typeof minhaString); 
console.log(typeof meuNumero);   

// 2. Entrada e decisão simples
function verificarNumero(num) {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

// 3. Par ou ímpar
function parOuImpar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// 4. Laço for básico
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 5. Soma com for
function somarAteN(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

// 6. Laço while
let contador = 10;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

// 7. Tabuada
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// 8. Decisão com switch
function verificarDia(dia) {
  switch (dia) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
      return "Dia útil";
    case "sábado":
    case "domingo":
      return "Fim de semana";
    default:
      return "Dia inválido";
  }
}

// 9. Função com múltiplos parâmetros
function apresentarPessoa(nome, idade, cidade) {
  return `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

// 10. Combinação de estruturas
function filtrarPares(array) {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

