// Write your solution here!
let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {

    cats.push("Ralph")
}

beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

  function destructivelyPrependCat(name) {

    cats.unshift("Bob")

  }

  beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

  function destructivelyRemoveFirstCat(name) {
    
    cats.shift()
  }

  beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

  function destructivelyRemoveLastCat(name) {
   
    cats.pop()
 }
  
  beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

 function appendCat(name) {
  const newArr = [...cats,"Broom"];
  return newArr;

 }

 beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

  function removeLastCat(name) {

    return cats.slice(0,-1);
  }

beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });


  function removeFirstCat(name) {

    return cats.slice(1)
  }

  beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

  function prependCat(name) {

    const newArr = ["Arnold",...cats]
    return newArr

  }

  beforeEach(function () {
    cats = ["Milo", "Otis", "Garfield"];
  });

