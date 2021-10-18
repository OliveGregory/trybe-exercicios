// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Acept': 'application/json' }
  };

    fetch(API_URL, myObject)
      .then((response) => console.log(response))
};

window.onload = () => fetchJoke();
