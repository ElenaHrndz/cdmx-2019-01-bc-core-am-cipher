let isCoding = true;
let buttonFun = document.getElementById('buttonFuntional');
let buttonToChange = document.getElementById('buttonToChange');
let inputLabel = document.getElementById('messageText');
let resultLabel = document.getElementById('codeText');
let resultArea = document.getElementById('yourResult');

let messageText = 'Mensaje';
let codeText = 'Codigo';

buttonToChange.addEventListener('click', ()=>{
  isCoding = !isCoding;
  if(isCoding){
    //set message to original state
    inputLabel.innerHTML = messageText;
    resultLabel.innerHTML = codeText;
    buttonFun.value = 'codificar';
  } else {
    //set message to invert place
    inputLabel.innerHTML = codeText;
    resultLabel.innerHTML = messageText;
    buttonFun.value = 'decodificar';
  }
})

buttonFun.addEventListener('click',()=>{
  let numberCrypting = document.getElementById("numberCode").value;
  let textToConvert = document.getElementById("yourInput").value;
  if(isCoding){
    //llamar al metododo codificar e imprimirlo
    resultArea.value = window.cipher.encode(numberCrypting, textToConvert);
  } else {
    //llamar al metododo decodificar e imprimirlo
    resultArea.value = window.cipher.decode(numberCrypting, textToConvert);
  }
})
