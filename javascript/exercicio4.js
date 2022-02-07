//e-1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i ++ ) {
  }
console.log(numbers[i]);

//e-2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let soma = 0;   
for (let i = 0; i < numbers.length; (i) ++){
soma += numbers[i]    
}
console.log(soma);

//e-3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = 0;

for (let i = 0; i < numbers.length; i += 1) {
  valor += numbers[i];
 }

let valor = valor / numbers.length;

console.log(valor);

//e-4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i ++) {
  result += numbers[index];
}

resultado = resultado / numbers.length;

if (resultado > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//e-5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiornumero = numbers[0];

for (let i = 1; i < numbers.length; i ++) {
  if (numbers[i] > maiornumero) {
    maiornumero = numbers[i];
  }
}

console.log(maiornumero);

//e-6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i ++) {
  if (numbers[i] % 2 !== 0) {
    resultado += 1;
  }
}

if (resultado === 0) {
  console.log('impar nao encontrado');
} else {
  console.log(resultado);
}

//e-8

let numbers = [];

for (let i = 1; i <= 25; i ++) {
  numbers.push(i);
}

console.log(numbers);

//e-9

let numbers = [
  1,  2,  3,  4,  5,  6,  7,  8,
  9, 10, 11, 12, 13, 14, 15, 16,
 17, 18, 19, 20, 21, 22, 23, 24,
 25
]
for (let i = 0; i < numbers.length; i ++) {
  console.log(numbers[i] / 2);
}


