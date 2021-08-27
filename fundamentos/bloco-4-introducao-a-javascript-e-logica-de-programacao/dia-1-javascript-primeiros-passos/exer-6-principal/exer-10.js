const val = 30;
const cust = 47;

let imposto = (20/100);

let lucroPosVenda = (val-(cust*imposto))*1000;


if (val === 0 || cust === 0) {
    console.log('ERROR in value: -val-  or -cust-')
}

console.log('Lucro:', lucroPosVenda)
