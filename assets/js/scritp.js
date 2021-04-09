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

console.log(arrayNumeri[0]);

/* 
  -  i=0 si 
    la posizione numero i di arrayNumeri = 0 + 1; 1
    i= i+1

  - i=1 si
    la posizione numero i di arrayNumeri = 1 + 1; 2
  
  - i=2 si
    la posizione numero i di arrayNumeri = 2 + 1; 3
  
  - i=3 si
    la posizione numero i di arrayNumeri = 3 + 1; 4

  - i=4 si
    la posizione numero i di arrayNumeri = 4 + 1; 5
    
*/

console.log("---------------------------------------");

/* 
  inizializzo array numeri 

  for(dichiaro la i e assegno ad i il valore inziale 0; condizione per il ciclo i<100; incremento i = i++){
    in posizione i di array numeri assegno il valore di i incrementato di 1 
    arraynumeri[i]=i+1;

    
    visualizzo il contenuto in posizione i di array numeri 
    console.log(arraynumeri[i]);  
  }

  


*/



















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