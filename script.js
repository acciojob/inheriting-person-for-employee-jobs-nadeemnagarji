// complete this js code
function Person(name, age) {
		this.name = name
		this.age = age
}
Person.prototype.greet = function(){
		console.log(``Hello, my name is ${this.name} and I am ${this.age} years old.``)
}

function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
