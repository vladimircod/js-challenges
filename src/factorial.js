const factorial = (number) => {
  var resultado = number;
  if (number === 0 || number === 1) 
    return 1; 
  while (number > 1) { 
    number--;
    result *= number;
  }
  return resultado;
}
module.exports = factorial;
