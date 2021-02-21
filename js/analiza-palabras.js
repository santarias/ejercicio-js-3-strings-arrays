/* Crea tu función aquí */

const analizaPalabras = (palabras) => palabras
  .map(palabra =>
    console.log(`Palabra : ${palabra} 
    Nº de caracteres: ${palabra.length}
    Deletro: ${palabra.split("").join("-")}
    La palabra ${palabra.length % 2 === 0 ? 'es par' : 'es impar'}
    y ${palabra.charAt(0) === palabra.charAt(0).toUpperCase() ? '' : 'no '}empieza por mayuscula
    La palabra ${palabra.includes('ble') ? 'si' : 'no'} contiene la palabra ble`));
