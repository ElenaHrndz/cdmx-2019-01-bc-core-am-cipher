//esta variable se escribe afuera por que es tilizada por las funciones que estan dentro del objeto y por la que esta afuera
let maxLetterNumber = 26;

window.cipher = {
//funcion para codificar (da el movimineto de las letras a convertit)
  encode: (totalNumberCypher, textToConvert) => {
//numero total de movimientos
    let offset = numberMoves(totalNumberCypher);
//pasa las letras que se ingresan a mayusculas
    textToConvert = textToConvert.toUpperCase();
    //obtiene el string y lo divide en el espacio
    let arrayOfCharacters = textToConvert.split('');
    //declara la variable vacia que debe cubrir ciertas caracteristicas {16 - 41}
    let code = '';
    //va a recorrer el string,empezando en cero; determina el valor de cada caracter, lo guarda y pasa con el siguiente
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      //se declara la variable
      let codeform;
      //le asigna el valor,numero, corespondietne a cada letra
      let codeAscii = arrayOfCharacters[i].charCodeAt(0);
      //determina la parte del ascii que se utiliza (los valores del ascci en los que corre) {22 - 38}
      if (codeAscii < 65 || codeAscii > 90 && codeAscii < 97 || codeAscii > 122 && codeAscii < 127) {
        //cambia el valor de los caracteres
        codeform = arrayOfCharacters[i];
      } else {
        //suma el offset a los caracteres usados del ascii, si esto es mayor o igual a maximo numero de letras pasa a la siguiente acciòn
        if (codeAscii + offset >= 65 + maxLetterNumber) {
          // si lo anterior se cumple entonces "codeform" le suma 65 a la diferencia que resulta de sumar el codigo ascii y el offset menos el numero maximo de letras màs 65
          codeform = 65 + ((codeAscii + offset) - (maxLetterNumber + 65));
          // si la suma de ascii y offset es menor a 65 entonces:
        } else if (codeAscii + offset < 65) {
          //codeform abtiene el resuktado de la diferencia de el maximo numero de letras màs 65 y (a lasuma del codigo ascii mas la suma del offset le retsa 65)
          codeform = (maxLetterNumber + 65) - (65 - (codeAscii + offset));
        } else {
          // cuando cualquiera de las condiciones anteriores se cumple obtenemos el valor de "codeform"
          codeform = (codeAscii + offset);
        }
      }
      //se obtiene el valor de la cadena obtenida en codeform
      code += String.fromCharCode(codeform);
    }
    //regresa el texto codificado
    return code;
  },

  decode: (totalNumberCypher, textToConvert) => {
    let offset = numberMoves(totalNumberCypher);
    textToConvert = textToConvert.toUpperCase();
    let arrayOfCharacters = textToConvert.split('');
    let code = '';
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      let codeform;
      if (arrayOfCharacters[i] == ' ') {
        codeform = arrayOfCharacters[i];
      } else {
        let codeAscii = arrayOfCharacters[i].charCodeAt(0);
        if (codeAscii - offset < 65) {
          codeform = (maxLetterNumber + 65) - (65 - (codeAscii - offset));
        } else if (codeAscii - offset > 65 + maxLetterNumber) {
          codeform = 65 + ((codeAscii + offset) + (maxLetterNumber + 65));
        } else {
          codeform = (codeAscii - offset);
        }
      }
      code += String.fromCharCode(codeform);
    }
    return code;
  }
};

//esta fuuncion permite saber la cantidad final de movimientos que va a tener el mensaje al momento de  convertirlo
function numberMoves(numberToConvert) {
  numberToConvert = parseInt(numberToConvert);
  //obtiene el residuo del numero de movimientos asignados por el usuario entre el numero de letras
  numberToConvert %= maxLetterNumber;
  //da el numero real, final, de movimientos que se van a tener
  return numberToConvert;
}
