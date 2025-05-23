const claveApi = '409c09dceb3c4f2e96203903250605';
const idioma = 'es';
const inputCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
  const ciudad = inputCiudad.value;
  if (!ciudad) {
    alert('Por favor, ingresa una ciudad.');
    return;
  }
  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

  const response = await fetch(apiClimaActual);
  const data = await response.json();
  
  mostrarClima(data);
}

function mostrarClima(data) {
 document.querySelector('.clima-icono').scr = data.current.condition.icon;
 document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
 document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
 document.querySelector('.ciudad').innerHTML = data.location.name;
 document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
 document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}