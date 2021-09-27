function palindromo(str) {

  var tamanhoDaStr = str.length;
  var arrendodarStrParaInteiro = Math.floor(tamanhoDaStr/2);

  for ( let i = 0; i < arrendodarStrParaInteiro; i++ ) {
    if (str[i] !== str[tamanhoDaStr - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(palindromo('vespa'))