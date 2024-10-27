let edades = new Map();

edades.set("Alberto", 24);
edades.set("Maria", 35);
edades.set("Carlos", 19);
edades.set("Victor", 62);

edades.set("Victor", 56);

edades.forEach((edad, nombre) => {
  console.log(`${nombre}: ${edad}`);
});