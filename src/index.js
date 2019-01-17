//variables utilizadas en los botones y cajas de texto
let isCoding = true;
let buttonFun = document.getElementById('buttonFuntional');
let buttonToChange = document.getElementById('buttonToChange');
let inputLabel = document.getElementById('messageText');
let resultLabel = document.getElementById('codeText');
let resultArea = document.getElementById('yourResult');

//variables de los mensajes que indican la funcion que tiene en ese momento la caja de texto.
let messageText = 'Mensaje';
let codeText = 'Codigo';

//dar al boton la funcionalidad de cambiar los textos que indican la funcion que tiene cada caja de texto al momento de hacer el click
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

//dar al boton la funcionalidad al momento de hacer el click
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
