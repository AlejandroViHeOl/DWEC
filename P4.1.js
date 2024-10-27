let paises = ["España", "Francia", "Alemania", "Italia"];

paises.forEach(pais => {
  console.log(pais);
});

paises.shift();

paises.forEach(pais => {
  console.log(pais);
});