class Animal {
    name = "Generic Animal";
    private age = 10;
    protected identity = 'doggy';

    constructor() {

    } 

    sayHi() {
        console.log("Grrr", this.age);
    }
}

class Dog extends Animal {
    type = "German Sheld";

    constructor() {
        super();
    }
    sayYo() {
        console.log(this.identity);
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();
    

const myDog: Dog = new Dog();
console.log(myDog.name);
myDog.sayYo();
