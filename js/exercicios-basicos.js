//variáveis e tipos
let minhaString = "Olá, mundo!";
const meuNumero = 42;

console.log(typeof minhaString); 
console.log(typeof meuNumero);   

//entrada e decisão simples
function verificarNumero(num) {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

//par ou ímpar
function parOuImpar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

//laço for básico
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//soma com for
function somarAteN(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

//laço while
let contador = 10;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

//tabuada
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

//decisão com switch
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

//função com múltiplos parâmetros
function apresentarPessoa(nome, idade, cidade) {
  return `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

//combinação de estruturas
function filtrarPares(array) {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}
//aula do dia 1609
const users = [
 {
  "name": "Fernanda", "age": 12,
  "contact": "55 31 998319375", "city": "Salvador"

},
{


  "name": "Dora", "age": 17,
  "contact": "55 31 998315856", "city": "Pernambuco"
},


{ 
  "name": "Dora", "age": 25,
  "contact": "55 31 99831554", "city": "Salvador"
},

]

const contagem = users.reduce((acumulador, user) =>{
 //acumulador[user.city] = "salvador" + 1;
acumulador[user.city] = (acumulador[user.city] || 0) + 1;
 return acumulador;
}, {});
console.log(contagem); 

//média das idades

const somaDasIdades = users.reduce((acumulador, user, index, array) =>{
 acumulador[user.age.city] = (acumulador[user.age.city] || 0);
acumulador += user.age;
 if(index === array.length-1){
  return acumulador/array.length
 }
 return acumulador;
}, 0);
console.log(somaDasIdades); 

const mediaDasIdades = somaDasIdades = somaDasIdades / user.length;

const numbers = [ 1 , 2 , 3 , 4]
const pares = numbers.filter(n => n % 2 === 0)
console.log(pares);


