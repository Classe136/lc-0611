"use strict";
console.clear();
/*
PASSAGGIO DI FUNZIONI COME PARAMETRI AD UN'ALTRA FUNZIONE (CALLBACK)

FUNZIONI ANONIME

ASSEGNAZIONE DI FUNZIONI AD UNA VARIABILE

ARROW FUNCTION



*/

const students = ["Michele", "Fabio", "Eleonora"];
const numbers = [1, 99, 80, 100];

function numSquare(num) {
  console.log(num * num);
}

// scriviamo una funzione che stampi gli tutti gli elementi di un array

function printArray(myarray, fn) {
  console.log(fn);
  for (let i = 0; i < myarray.length; i++) {
    fn(myarray[i]);
  }
}

// printArray(students, (name) => console.log("hello" + name));

// printArray(numbers, numSquare);

// const persona = {
//   name: "Michele",
//   surname: "Saraceni",
//   camminare: function () {
//     console.log("Michele sta camminando");
//   },
// };

// persona.camminare();

const isEven = (num) => num % 2 === 0;
const printMyArray = (myarray) => {
  for (let i = 0; i < myarray.length; i++) {
    console.log("Hello" + " " + myarray[i]);
  }
};

// printMyArray(students);

// const pari = isEven(15);
// console.log(pari);

// metodo filter degli array restituisce un nuovo array contenente solo i valori dell'array iniziale che superano un determinato test o condizione

const evenNumbers = numbers.filter(isEven);
const studentLength5 = students.filter((el) => el.length > 5);

// console.log(evenNumbers);
// console.log(studentLength5);

function myFilter(myArray, fnTest) {
  //Crea nuovo array vuoto
  const newArray = [];
  console.log(fnTest);

  //cicla sull'array che gli ho passato
  for (let i = 0; i < myArray.length; i++) {
    //per ogni elemnto dell'array esegue la funzione test che gli ho passato se la funzione ritorana true l'elemnto viene messo nell nuovo array altrimenti viene scartato
    if (fnTest(myArray[i])) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

const testParola = (parola) => parola.length > 5;

// let arrayFiltrato = myFilter(students, testParola);
// console.log(arrayFiltrato);

// arrayFiltrato = myFilter(numbers, isEven);
// console.log(arrayFiltrato);

// scrivere una funzione che acceti un array di colori e ritorni un nuovo array con i colori che contengono la lettera r

const colors = ["red", "blue", "yellow", "green"];

function colorFilter(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("r")) {
      newArray.push(array[i]);
    }

    //console.log(array[i].includes("r"));
  }

  return newArray;
}
let risultato = colorFilter(colors);

console.log(risultato);
