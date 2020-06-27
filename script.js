
function convert () {
const binaryNumber = document.getElementById('binary').value;

if (binaryNumber === "") {
  return alert("Coloque um número")
} 

  binaryNumber.split('').map((char) => {
    if (char != '0' && char != '1') {
      return alert("Coloque um número binario")
      };
  });


  const decimal = parseInt(binaryNumber, 2);
  document.getElementById('d-input').value = decimal;
  return true;
}