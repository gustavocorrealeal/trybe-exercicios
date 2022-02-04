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



