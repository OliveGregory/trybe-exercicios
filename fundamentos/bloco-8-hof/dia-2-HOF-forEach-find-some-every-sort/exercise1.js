// const assert = require('assert');

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// // Adicione o código do exercício aqui:

// function authorBornIn1947() {
//   const firstPeople = books.find(book => book.author.birthYear === 1947).author.name;
//   return firstPeople;
// };

// assert.strictEqual(authorBornIn1947(), 'Stephen King');

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

// forEach -> EXAMPLE

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);


// find -> EXAMPLE 

  // const numbers = [19, 21, 30, 3, 45, 22, 15];

  // const findDivisibleBy3And5 = (number) => {
  //   if (number % 3 === 0 && number % 5 === 0) {
  //     return number;
  //   }
  // };

  // const numDiv = numbers.find(findDivisibleBy3And5);

  // console.log(numDiv);
  // console.log(findDivisibleBy3And5);

  // const musicas = [
  //   { id: '31031685', title: 'Partita in C moll BWV 997' },
  //   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  //   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  // ]
  
  // function findMusic(id) {
  //   return musicas.find((musica) => musica.id === id);
  // };

  // console.log(findMusic('31031685'));

  // Arraay.some and array.every -> EXAMPLE

  // const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  // const hasName = (arr, name) => {
  //   //Adicione seu código aqui
  //   return arr.some((checkNameInList) => checkNameInList === name)
  // };
  
  // console.log(hasName(names, 'Ana'))

  // const people = [
  //   { name: 'Mateus', age: 18 },
  //   { name: 'José', age: 16 },
  //   { name: 'Ana', age: 23 },
  //   { name: 'Cláudia', age: 20 },
  //   { name: 'Bruna', age: 19 },
  // ];
  
  // const verifyAges = (arr, minimumAge) => {
  //   //Adicione seu código aqui
  //   return arr.every((checkAgeForDriving) => checkAgeForDriving.age >= minimumAge);
  // }
  
  // console.log(verifyAges(people, 18));


  // Array.sort -> EXAMPLE 

  // const people = [
  //   { name: 'Mateus', age: 18 },
  //   { name: 'José', age: 16 },
  //   { name: 'Ana', age: 23 },
  //   { name: 'Cláudia', age: 20 },
  //   { name: 'Bruna', age: 19 },
  // ];
  
  // // Adicione se código aqui
  // people.sort((firstPerson, secondePerson) => firstPerson.age - secondePerson.age);
  // console.log(people);
