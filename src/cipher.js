window.cipher = {
  encode: (numberCode, textToEncode) => {
    code(numberCode, textToEncode);
  },
  decode: (numberCode, textToDecode) => {
    decode(numberCode, textToDecode);
  },
};

let maxLetterNumber = 26;

function code(number, text:textToConver) {
  let newNumber = numberMoves(number);
  let textToConvert = text.toUpperCase();
  for (let i; i < textToConvert; i++) {
    let letterAscii = textToConvert.charCodeAt(i);
    let codeform = (letterAscii + 65 - offset) % 26 + 65;
    code += string.fromCharCode(letterAscii[i]);
  }
}


function decode(number, text) {
  let newNumber = numberMoves(number);

}

function numberMoves(numberToConvert) {
  numberToConvert = parseInt(numberToConvert);
  numberToConvert %= maxLetterNumber;
  return numberToConvert;
}
