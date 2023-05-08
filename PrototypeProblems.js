Number.prototype.add = function (a) {
  this.total = 0;

  return function () {
    return (total += a);
  };
};

function increase() {
  let a = 0;

  return function () {
    return a++;
  };
}

let a = increase();

console.log(a());
console.log(a());

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());



function Animal(animal) {
  this.animal = animal;
}

Animal.prototype.eat = function () {
  return this.animal + " is eating";
};

const animal = new Animal("dog");
console.log(animal.eat());
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getPersonData = function () {
  return this.name + " is " + this.age;
};

const person = new Person("feramiz", 20);
console.log(person.getPersonData());



Array.prototype.newPop = function () {
  if (this.length == 0) return;

  if (this.length !== 0) return this[this.length - 1];
};

console.log([1, 2, 4, 6].newPop());
