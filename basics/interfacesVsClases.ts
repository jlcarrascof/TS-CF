interface PersonInterface {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string; 
}

class PersonClass {
    sayHello() {
        console.log("Grrr");
    }
}

// const personOne: PersonInterface = {}
const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

interface PetInterface {
    sayHello: () => string;
}

class PetClass {
    sayHello() {
        return "Hello";
    }
}

class Doggy implements PetInterface {
    sayHello() {
        return "Hello from Doggy class";
    }
}

class Cat extends PetClass {}