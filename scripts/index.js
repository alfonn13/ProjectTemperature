
//Funcion para transformar la temperatura de Celsius a Farenheit
const convertTemperature =() => {

  //Obtenemos la temperatura en grados celsius y lo asociamos con el id="celsius"
  const celsius = parseFloat(document.getElementById('celsius').value);

  console.log(typeof(celsius))

  //Verificar si la entarda es valida
  if (isNaN(celsius)) {
    alert('Por favor, ingresa una temperatura valida.');
    return;
  }

  //Calcular la temperatura en farenheit
  const fahrenheit=(celsius *9/5)+32;

  //Mostrar resultado en la pagina (text content lo mete lo que hay dentro del span)
  document.getElementById('farenheit').textContent = fahrenheit.toFixed(2);





}

