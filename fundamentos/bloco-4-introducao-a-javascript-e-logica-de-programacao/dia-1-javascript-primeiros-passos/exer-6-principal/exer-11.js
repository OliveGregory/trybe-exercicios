let salarioBruto = 1500.10;
let salarioBase = 0;


// cálculo de impostos do INSS

if (salarioBruto <= 1.556,94) {
  salarioBase = salarioBase + (salarioBruto * 0.08);

}

else if (salarioBruto >= 1.556,95 && salarioBruto <= 2.594,92) {
  salarioBase = salarioBase + (salarioBruto * 0.09);

}

else if (salarioBruto >= 2.594,93 && salarioBruto <=  5.189,82) {
  salarioBase = salarioBase + (salarioBruto * 0.11);

}

else if (salarioBruto > 5.189,82) {
  salarioBase = salarioBase - 570.88;

}

// cálculo de imspostos do IR

if (salarioBruto <= 1.903,98) {
  console.log(salarioBruto);
  console.log('Salário líquido:',salarioBase);

}

else if (salarioBase >= 1.903,99 && salarioBase <= 2.826,65) {
  salarioBase = (salarioBase * 0.075) - 142.80;
  console.log('Salário líquido:',salarioBase);

}

else if (salarioBase >= 2.826,66 && salarioBase <= 3.751,05) {
  salarioBase = (salarioBase * 0.15) - 354.80;
  console.log('Salário líquido:',salarioBase);

}

else if (salarioBase >= 3.751,06 && salarioBase <= 4.664,68) {
  salarioBase = (salarioBase * 0.225) - 636,13;
  console.log('Salário líquido:',salarioBase);
}

else if (salarioBase > 4.664,68) {
  salarioBase = (salarioBase * 0.275) - 869,36;
  console.log('Salário líquido:',salarioBase);

}

