var text = 'Papugi kosz� traw�, unosz�c si� nad ziemi� 15 centymetr�w, na czerwonych dywanach';
var animal = 'Zielone s�onie'
var animal = animal.toUpperCase();
console.log(animal);
var text = text.replace('Papugi', animal);
var textLength = (text.length);
var textHalf = text.slice(0,textLength/2)
console.log(textHalf);