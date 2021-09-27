let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const printArray = () => {
  let oddsAndEvens = [13, 3, 4, 10, 7, 2];
  let contagem = 0;
  for (let i = 0; i <= oddsAndEvens.length; i += 1) {
    if (oddsAndEvens[i] < oddsAndEvens[i+1]) {
      //console.log(`Os números ${oddsAndEvens} estão ordenados!`)
      contagem = contagem + 1;
      if(contagem === 6){
        console.log(`Os números ${oddsAndEvens} estão ordenados!`)
      }
    }
    
    else {
      //console.log(`Ops, os números: ${oddsAndEvens} não estão ordenados`)
      contagem = contagem + 1;
      if(contagem === 6){
        console.log(`Ops, os números: ${oddsAndEvens} não estão ordenados`)
      }
    }
  }
}
printArray();