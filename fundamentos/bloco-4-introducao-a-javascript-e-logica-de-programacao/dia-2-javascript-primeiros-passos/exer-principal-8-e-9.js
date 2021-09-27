let num = [];
let newNum = [];
let div = 0;
let add = 0;

for (contador = 0; contador <= 24; contador++) {
    add = add + 1;
    num.push(add);
}

for (let index = 0; index <= 24; index ++){
    div = num[index] / 2
    newNum.push(div)
    console.log(div);
}
