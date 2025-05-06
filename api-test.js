const claveApi = '409c09dceb3c4f2e96203903250605';
const ciudad = "Arequipa";
const idioma = "es";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const reponse= await fetch(apiClimaActual);
let data = await reponse.json();

console.log(data.current.condition);