let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem-vinda, ',info.personagem);

info['recorrente'] = 'sim';

//console.log(info)

for (let index in info){
  //console.log(index)
}

for (let index in info){
  //console.log(info[index])
}

let bio = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #1",
  nota: 'O último MacPatinhas',
  recorrente: 'Ambos recorrentes',
};

console.log(info.personagem, ' e ',  bio.personagem);
console.log(info.origem, ' e ', bio.origem);
console.log(info.nota, ' e ', bio.nota);
console.log(bio.recorrente);
