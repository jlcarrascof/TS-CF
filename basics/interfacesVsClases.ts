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
        fetch("...");
    }
}

// const personOne: PersonInterface = {}
const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();


