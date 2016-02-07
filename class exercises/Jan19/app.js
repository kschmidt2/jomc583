// question 1

function farToCel (farenheit) {
  var celsius = (farenheit - 32) * .55;
  celsius = Math.floor(celsius);
  if (celsius < 10) {
    console.log("The current temperature is " + celsius + " degrees Celsius. It is cold outisde.")
  }
  else if (celsius >= 10 && celsius < 25) {
    console.log("The current temperature is " + celsius + " degrees Celsius. It is fair outisde.")
  }
  else {
    console.log("The current temperature is " + celsius + " degrees Celsius. It is hot outisde.")
  }
}

farToCel(95);

// question 2

var array1 = [10, 20, 100, 2, 5];
var total = 0;

function sum (n) {
  for (var i = 0; i < n.length; i++) {
    total += n[i];
    //  total = total + n[i];
  }
  console.log(total);
}

sum(array1);

// question 3

var array2 = [10,20,100,2,5];
var greatest = 0;

function greatestNumber (m) {
  for (var i = 0; i < m.length; i++) {
    if (m[i] > greatest) {
      greatest = m[i];
    }
  }
  console.log(greatest);
}

greatestNumber(array2);

// question 4

var myString = "My name is Kiersten";

function charFreq (str) {

  var myCharacters = {};

  for (var i = 0; i < str.length; i++) {
    var currentChar = str.charAt(i);
    if (myCharacters[currentChar] === undefined) {
      myCharacters[currentChar] = 0;
    }
    myCharacters[currentChar]++;
  }
  return myCharacters;
}

var frequency = charFreq(myString);

for (var j in frequency) {
  console.log(j + ": " + frequency[j]);
}


// question 5

var maxNumber = 25;

function fibonacci (max) {

}
