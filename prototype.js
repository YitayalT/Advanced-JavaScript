// In javaScript every function has a property called prototype that points to an  object
function Person(fName, lName){
    this.fName = fName;
    this.lName = lName
}

const person1 = new Person('belete', 'kebede');
const person2 = new Person('Alemitu', 'Lemlemitu');

Person.prototype.getFullName = function(){
    return this.fName + ' ' + this.lName;
}

const name1 = person1.getFullName();
const name2 = person2.getFullName();
console.log(name1);
console.log(name2);
