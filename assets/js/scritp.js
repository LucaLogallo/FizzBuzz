/* 
  VARIABILI
  arrayNumeri = array contenente i 100 numeri
  fizz = "fizz"
  buzz = "buzz"


  PROCEDIMENTO
  inizializzo il vettore di 100 numeri vuoto
  con un ciclo for lo riempio

  con un cilo for lo scorro e inserisco le condizioni per il fizz, il buzz o entrambi

  se %3 = 0 && %5 != 0 {
    allora faccio stampare fizz
  }altrimenti se %3 != 0 && %5 = 0{
    allora faccio stampare buzz
  }altrimenti se %3 = 0 && %5 = 0{
    allora faccio stampare fizzbuzz
  }altrimenti{
    faccio stampare il numero
  }


*/
var arrayNumeri = []; //array vuoto
var fizz = "fizz";    //variabile fizz
var buzz = "buzz";    //variabile buzz

for (var i = 0; i < 100; i++) {
  arrayNumeri[i] = i + 1;
  console.log(arrayNumeri[i]);
}

console.log("---------------------------------------");

for (var i = 0; i < 100; i++) {
  if (arrayNumeri[i] % 3 === 0 && arrayNumeri[i] % 5 !== 0) {
    console.log(fizz);
  } else if (arrayNumeri[i] % 3 !== 0 && arrayNumeri[i] % 5 === 0) {
    console.log(buzz);
  } else if (arrayNumeri[i] % 3 === 0 && arrayNumeri[i] % 5 === 0) {
    console.log(fizz + buzz);
  } else {
    console.log(arrayNumeri[i]);
  }
}