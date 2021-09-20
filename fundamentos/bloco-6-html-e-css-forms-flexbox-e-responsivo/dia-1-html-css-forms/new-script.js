let selEstado = document.getElementById('your-estado');

let arrayStates = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'];
  
    
    
  function array() {
    for (let index = 0; index < arrayStates.length; index +=1) {
    const createOptions = document.createElement('option');
      const states = arrayStates[index];
      createOptions.innerText = states;
      selEstado.appendChild(createOptions);
    }
  }
    
array(); 


function checkDate(){
  // essa fun tem que ser chamada quando o botão de envio for clicado
  let date = document.getElementById('date');
  
  if(date.value == ''){
    alert('Por favor, informe a data no campo requerido!');
  }

}
checkDate();


function stop (e){
  e.preventDefault()
}


let codeBody = document.getElementById('corpo');
let bodyChild = codeBody.childNodes;
let dateSpace = document.getElementById('date');
function checkChildValue(){
  // essa função devee ser chamada quando o botão de enviar for clicado
  let compilationInfos = document.createElement('div');
  let spaceError = document.createElement('div')

  for(let i = 0; i < bodyChild.length; i += 1){
    if(bodyChild[i].value !== ''){
      compilationInfos.innerText(bodyChild[i])
    }
  }

  if(dateSpace.value == ''){
    spaceError.innerText = 'Error na data de início, preencha corretamente!';
  }
}

let buttonCheck = document.getElementById('checkform');

buttonCheck.addEventListener('click',checkDate)
buttonCheck.addEventListener('click',checkChildValue)
buttonCheck.addEventListener('click',stop);