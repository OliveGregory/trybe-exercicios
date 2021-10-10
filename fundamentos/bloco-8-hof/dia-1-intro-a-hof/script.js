const newEmployees = (concatFunction) => {
  const employees = {
    id1: concatFunction('Pedro Guerra'), 
    id2: concatFunction('Luiza Drumond'),
    id3: concatFunction('Carla paiva'),
  };
  return employees; 
};

const concatFunction = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName ,emai: `${email}@betrybe.com`};
}

console.log(newEmployees(concatFunction));