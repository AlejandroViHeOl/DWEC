function generarResultado() {
  let resultado = new Set();
  
  while (resultado.size < 6) {
    resultado.add(Math.floor(Math.random() * 49) + 1);
  }
  
  return Array.from(resultado).sort((a, b) => a - b);
}

for (let i = 0; i < 50; i++) {
  console.log(generarresultado());
}