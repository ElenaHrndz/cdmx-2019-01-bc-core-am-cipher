//esta variable se escribe afuera por que es tilizada por las funciones que estan dentro del objeto y por la que esta afuera
let maxLetterNumber = 26;

window.cipher = {
  //funcion para codificar (da el movimineto de las letras a convertit)
  encode: (totalNumberCypher, textToConvert) => {
    //numero total de movimientos
    let offset = numberMoves(totalNumberCypher);
    //convierte el texto ingresado en un arreglo(lo separa por letra)
    let arrayOfCharacters = textToConvert.split('');
    //declara la variable...
    let code = '';
    //va a recorrer el string, para determinar la posicion que tiene cada letra
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      //se declara la variable newCodeAscii
      let newCodeAscii;
      //devuelve el valor del carcter en el codigo ascii
      let codeAscii = arrayOfCharacters[i].charCodeAt(0);
      //determina la parte del codi ascii que se utiliza (los valores del ascci en los que corre)
      if (codeAscii < 65 || codeAscii > 90 && codeAscii < 97 || codeAscii >122) {
        //determina la letra a codificar y...
        code += arrayOfCharacters[i];
      } else {
        //si es mayuscula recorre el codigo ascii a partir de los caracteres corespondientes a las mayusculas (65-91)
        if (codeAscii >= 65 && codeAscii < (65 + maxLetterNumber)){
          newCodeAscii = encodeCapitalsOrLowercase(65, codeAscii, offset);
        }
        //si es minuscula recorre el codigo ascii a partir de los caracteres corespondientes a las minusculas(97-123)
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
        //si es mayuscula
        if (codeAscii >= 65 && codeAscii < (65 + maxLetterNumber)){
          // da los parametros para convertir las mayusculas
          newCodeAscii = decodeCapitalsOrLowercase(65, codeAscii, offset);
        }
        //si es minuscula
        else if(codeAscii >= 97 && codeAscii < (97 + maxLetterNumber)){
          //da los parametros para convertir las minusculas
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
  //convierte el string a numberMoves
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
    //
  if (codeAscii + offset >= numberOfCaptalOrLowercase + maxLetterNumber) {
    //
    newCodeAscii = numberOfCaptalOrLowercase + ((codeAscii + offset) - (maxLetterNumber + numberOfCaptalOrLowercase));
    //
  } else if (codeAscii + offset < numberOfCaptalOrLowercase) {
    //
    newCodeAscii = (maxLetterNumber + numberOfCaptalOrLowercase) - (numberOfCaptalOrLowercase - (codeAscii + offset));
  } else {
    // cuando cualquiera de las condiciones anteriores se cumple obtenemos el valor de "newCodeAscii"
    newCodeAscii = (codeAscii + offset);
  }
  return newCodeAscii;
}

//Funcion recibe un numero de caracter y lo decodifica en mayuscula o minuscula dependiendo el numberOfCaptalOrLowercase siendo 65 para mayusculas
//y 97 para minusculas, se pide el codigo del caracter a transformar y el numero de posicines a mover
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
