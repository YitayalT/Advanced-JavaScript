// The javaScript this keyword which is used in a function refers to the object it belongs to.
// Implicit binding, Explicit binding, Default binding, new binding

function displayName(name, sex) {
    if (sex === 'male') {
        console.log(`His name is ${name}`); 
    } else {
        console.log(`Her name is ${name}`);
    }

}

displayName("Animaw Yitayal", "male");
displayName("wubayehu Yitayal", "female");


//Implicit binding rule order 3

const person = {
    name: 'Animaw',
    displayName: function() {
        console.log(`your name is ${this.name} implicitly`);
    }
}

person.displayName();

//Explicit Binding order 2
let displayName = function() {
    console.log(`your name is ${this.name} explicitly`);
}


displayName.call(person);

// New binding oreder 1

function Person(name){
  this.name = name;
}

const p1 = new Person('Animaw');
const p2 = new Person('Yitayal');

console.log(p1.name);
console.log(p2.name);


// Deafault binding order 4
displayName() // 