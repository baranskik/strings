var text = 'Papugi kosz¹ trawê, unosz¹c siê nad ziemi¹ 15 centymetrów, na czerwonych dywanach';
var animal = 'Zielone s³onie'
var animal = animal.toUpperCase();
console.log(animal);
var text = text.replace('Papugi', animal);
text = text.slice(0,text.length/2)
console.log(text);