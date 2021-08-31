let player = { 
  name: 'Marta', 
  lastName:'Silva', 
  age:34, 
  medals: {golden: 2, sliver: 3}, 
}; 

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; 

console.log('A jogadora ', player.name, 'da ',player.lastName, 'tem ', player.age,'amos de idade e foi eleita melhor por 6 vezes:' ); 

console.log(player.bestInTheWorld); console.log('A jogadora tem', player.medals['golden'],'medalhas de ouro e ',player.medals['sliver'],'de prata')