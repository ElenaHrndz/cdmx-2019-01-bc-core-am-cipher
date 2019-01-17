let maxLetterNumber = 26;

window.cipher = {
  encode: (totalNumberCypher, textToConvert) => {
    let offset = numberMoves(totalNumberCypher);
    textToConvert = textToConvert.toUpperCase();
    let arrayOfCharacters = textToConvert.split('');
    let code = '';
    for (let i = 0; i < arrayOfCharacters.length; i++) {
      let codeform;
      let codeAscii = arrayOfCharacters[i].charCodeAt(0);
      if (codeAscii < 65 || codeAscii > 90 && codeAscii < 97 || codeAscii > 122 && codeAscii < 127) {
        codeform = arrayOfCharacters[i];
      } else {
        if (codeAscii + offset >= 65 + maxLetterNumber) {
          codeform = 65 + ((codeAscii + offset) - (maxLetterNumber + 65));
        } else if (codeAscii + offset < 65) {
          codeform = (maxLetterNumber + 65) - (65 - (codeAscii + offset));
        } else {
          codeform = (codeAscii + offset);
        }
      }
      code += String.fromCharCode(codeform);
    }
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

function numberMoves(numberToConvert) {
  numberToConvert = parseInt(numberToConvert);
  numberToConvert %= maxLetterNumber;
  return numberToConvert;
}
