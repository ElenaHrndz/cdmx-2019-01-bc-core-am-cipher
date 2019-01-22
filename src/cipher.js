//esta variable se escribe afuera por que es tilizada por las funciones que estan dentro del objeto y por la que esta afuera
let maxLetterNumber = 26;

window.cipher = {
  //funcion para codificar (da el movimineto de las letras a convertit)
  encode: (totalNumberCypher, textToConvert) => {
    //numero total de movimientos
    let offset = numberMoves(totalNumberCypher);
    //obtiene el string y lo divide en el espacio
    let arrayOfCharacters = textToConvert.split('');
    //declara la variable vacia que debe cubrir ciertas caracteristicas {16 - 41}
    let code = '';
    //va a recorrer el string,empezando en cero; determina el valor de cada caracter, lo guarda y pasa con el siguiente
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      //se declara la variable
      let newCodeAscii;
      //le asigna el valor,numero, corespondietne a cada letra
      let codeAscii = arrayOfCharacters[i].charCodeAt(0);
      //determina la parte del ascii que se utiliza (los valores del ascci en los que corre) {22 - 38}
      if (codeAscii < 65 || codeAscii > 90 && codeAscii < 97 || codeAscii >122) {
        //cambia el valor de los caracteres
        code += arrayOfCharacters[i];
      } else {
        //si es mayuscula
        if (codeAscii >= 65 && codeAscii < (65 + maxLetterNumber)){
          newCodeAscii = encodeCapitalsOrLowercase(65, codeAscii, offset);
        }
        //si es minuscula
        else if(codeAscii >= 97 && codeAscii < (97 + maxLetterNumber)){
          newCodeAscii = encodeCapitalsOrLowercase(97, codeAscii, offset);
        }
        //se obtiene el valor de la cadena obtenida en codeform
        code += String.fromCharCode(newCodeAscii);
      }

    }
    //regresa el texto codificado
    return code;
  },

  decode: (totalNumberCypher, textToConvert) => {
    let offset = numberMoves(totalNumberCypher);
    let arrayOfCharacters = textToConvert.split('');
    let code = '';
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      let newCodeAscii;
      let codeAscii = arrayOfCharacters[i].charCodeAt(0);
      if (codeAscii < 65 || codeAscii > 90 && codeAscii < 97 || codeAscii >122){
        code += arrayOfCharacters[i];
      } else {
        if (codeAscii >= 65 && codeAscii < (65 + maxLetterNumber)){
          newCodeAscii = decodeCapitalsOrLowercase(65, codeAscii, offset);
        }
        //si es minuscula
        else if(codeAscii >= 97 && codeAscii < (97 + maxLetterNumber)){
          newCodeAscii = decodeCapitalsOrLowercase(97, codeAscii, offset);
        }
        code += String.fromCharCode(newCodeAscii);
      }

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

//Funcion recibe un numero de caracter y lo codifica en mayuscula o minuscula dependiendo el numberOfCaptalOrLowercase siendo 65 para mayusculas
//y 97 para minusculas, se pide el codigo del caracter a transformar y el numero de posicines a mover
function encodeCapitalsOrLowercase(numberOfCaptalOrLowercase, codeAscii, offset){
  let newCodeAscii;
  if (codeAscii + offset >= numberOfCaptalOrLowercase + maxLetterNumber) {
    // si lo anterior se cumple entonces "codeform" le suma 65 a la diferencia que resulta de sumar el codigo ascii y el offset menos el numero maximo de letras màs 65
    newCodeAscii = numberOfCaptalOrLowercase + ((codeAscii + offset) - (maxLetterNumber + numberOfCaptalOrLowercase));
    // si la suma de ascii y offset es menor a 65 entonces:
  } else if (codeAscii + offset < numberOfCaptalOrLowercase) {
    //codeform abtiene el resuktado de la diferencia de el maximo numero de letras màs 65 y (a lasuma del codigo ascii mas la suma del offset le retsa 65)
    newCodeAscii = (maxLetterNumber + numberOfCaptalOrLowercase) - (numberOfCaptalOrLowercase - (codeAscii + offset));
  } else {
    // cuando cualquiera de las condiciones anteriores se cumple obtenemos el valor de "codeform"
    newCodeAscii = (codeAscii + offset);
  }
  return newCodeAscii;
}

function decodeCapitalsOrLowercase(numberOfCaptalOrLowercase, codeAscii, offset){
  let newCodeAscii;
  if (codeAscii - offset < numberOfCaptalOrLowercase){
    newCodeAscii = (maxLetterNumber + numberOfCaptalOrLowercase) - (numberOfCaptalOrLowercase - (codeAscii - offset));
  } else if (codeAscii - offset >= numberOfCaptalOrLowercase + maxLetterNumber) {
    newCodeAscii = numberOfCaptalOrLowercase + ((codeAscii - offset) - (maxLetterNumber + numberOfCaptalOrLowercase));
  } else {
    newCodeAscii = (codeAscii - offset);
  }
  return newCodeAscii;
}
