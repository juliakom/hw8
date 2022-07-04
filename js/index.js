//1===========================

let triangle = {
  aSide: 0,
  bSide: 0,
  cSide: 0,
  
  setValues: function setValues() {
   this.aSide = +prompt('Enter aSide');
   this.bSide = +prompt('Enter bSide');
   this.cSide = +prompt('Enter cSide'); 
  },
  
  getPerimeter: function getPerimeter() { 
    let sum = this.aSide + this.bSide + this.cSide;
    return sum;
  },
  
  isEqualSides: function isEqualSides() { 
    return this.aSide == this.bSide && this.bSide == this.cSide && this.aSide  == this.cSide;
  },
}

triangle.setValues(); // for examle 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true */

//2==========================

const calculator = {
  read: function readValues() {
    this.x = +prompt('Enter x');
    this.y = +prompt('Enter y');
  },
  
  sum: function calcSum() {
    return this.x + this.y;
  },
  
  multi: function calcMulti() {
    return this.x * this.y;
  },
  
  diff: function calcDiff() {
    return this.x - this.y;
  },
  
  div: function calcDiv() {
    return this.x / this.y;
  },
}

calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.diff());

//3=============================

var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
      name: 'Kyiv',
      population: 2907817,
      area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end) ;
}

format.call(country,'','' ); // Ukraine

format.apply(country,['[', ']']); // [Ukraine]

format.call(country.capital,'',''); // Kyiv

format.apply(country.capital,['','']); // Kyiv

format.apply(name,['','']);  //undefined */

//4========================

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

//undefined
//потому что переменная назначена вне области функции

function logIt(){
  var text = 'outside';
  console.log(text);
  text = 'inside';
  console.log(text);
};
logIt();



