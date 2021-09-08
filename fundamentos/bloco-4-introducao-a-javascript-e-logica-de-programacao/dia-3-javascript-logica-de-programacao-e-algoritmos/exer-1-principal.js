// crie uma variavel para definir o tamanho/largura do quadrado
let num = 3;


// crie um array para guardar os valores de uma linha 
let characters = [];


// crie um for para adicionar os caracteres necessários em cada linha, que nesse caso é um array

for (index = 1; index <= num; index ++) {
	characters.push('*')
}


// crie um for para correr as colunas e adicionar uma linha(que é um array do for anterior)

for (index = 1; index <= num; index ++) {
	console.log(characters);
}