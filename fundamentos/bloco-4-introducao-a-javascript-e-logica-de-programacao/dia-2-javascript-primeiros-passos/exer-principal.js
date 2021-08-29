let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med = 0;
let maior = 0;
let menor = Number.POSITIVE_INFINITY; /* o 'menor' começa com o maior valor positivo, para que qualquer outro valor seja menor que ele*/


let valImp = 0;


for (index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
    sum = sum + numbers[index]
}

med = med + sum/numbers.length

if (med > 20) {
    console.log('A média aritimética é maior que 20');

}

else {
    console.log('A média aritimética é menor que 20');

}

for (cont = 0; cont < numbers.length; cont++) {
    if ( numbers[cont] > maior ) {
       maior = numbers[cont];
    }
}

for (cont = 0; cont < numbers.length; cont++) {
    if ( (numbers[cont])%2 !== 0 ) {
        valImp = valImp + 1
    }
}


console.log('A soma dos números contidos no array é:', sum)
console.log('A média aritimética contida no array é:', med)
console.log('O maior número do array é:', maior)

if (valImp !== 0) {
    console.log('O array contém', valImp, 'números ímpares.')

}

else if  (valImp === 0) {
    console.log('O array não possui números ímpares')
}

for (cont = 0; cont < numbers.length; cont++) {
    if ( numbers[cont] < menor ) {
       menor = numbers[cont];
    }
}

console.log('O menor número do array é:', menor)