//criar uma variável para que conte a corrida de posições dentro do for 

let score = 4;


//criar array para guardar val

let print = [];


// criar uam varável para guardar os espaços 

let space = '';

// criar uma variável para adicionar o caracter

let character ='*';


//esse for é para adicionar os espaços vazios

for (index = score - 1; index >= 1; index = index - 1) {
  print.push(space);
}

